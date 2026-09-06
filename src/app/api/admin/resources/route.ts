import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { isAdminUser } from '@/lib/auth/admin';

// 허용 확장자 목록
const ALLOWED_EXTENSIONS = [
  'pdf',
  'docx',
  'pptx',
  'xlsx',
  'zip',
  'png',
  'jpg',
  'jpeg',
  'webp',
];

// 최대 파일 크기 (50MB)
const MAX_FILE_SIZE = 50 * 1024 * 1024;

// 1. 관리자 자료 목록 조회 (GET)
export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!(await isAdminUser(user, supabase))) {
      return NextResponse.json(
        { error: '관리자 권한이 필요합니다.' },
        { status: 403 }
      );
    }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    let query = supabase
      .from('jamyung_resources')
      .select('*')
      .order('created_at', { ascending: false });

    if (status && status !== 'all') {
      query = query.eq('status', status);
    }
    if (category && category !== '전체') {
      query = query.eq('category', category);
    }
    if (search) {
      query = query.or(`title.ilike.%${search}%,resource_code.ilike.%${search}%`);
    }

    const { data, error } = await query;

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ resources: data || [] });
  } catch (err: any) {
    console.error('Admin Resources GET error:', err);
    return NextResponse.json({ error: '서버 오류' }, { status: 500 });
  }
}

// 2. 관리자 신규 자료 등록 (POST)
export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!(await isAdminUser(user, supabase))) {
      return NextResponse.json(
        { error: '관리자 권한이 필요합니다.' },
        { status: 403 }
      );
    }

    const formData = await request.formData();
    const resourceCode = (formData.get('resource_code') as string)?.trim();
    const title = (formData.get('title') as string)?.trim();
    const slug = (formData.get('slug') as string)?.trim();
    const description = (formData.get('description') as string) || '';
    const category = (formData.get('category') as string) || '기타';
    const tagsRaw = (formData.get('tags') as string) || '';
    const status = (formData.get('status') as string) || 'draft';
    const visibility = (formData.get('visibility') as string) || 'member';
    const youtubeUrl = (formData.get('youtube_url') as string) || null;
    const relatedCourseUrl = (formData.get('related_course_url') as string) || null;
    const relatedCourseTitle = (formData.get('related_course_title') as string) || null;
    const isFeatured = formData.get('is_featured') === 'true';
    const sortOrder = parseInt((formData.get('sort_order') as string) || '0', 10);
    const file = formData.get('file') as File | null;
    const thumbnail = formData.get('thumbnail') as File | null;

    if (!resourceCode || !title || !slug) {
      return NextResponse.json(
        { error: '자료 코드, 제목, 슬러그는 필수 입력 항목입니다.' },
        { status: 400 }
      );
    }

    if (!file) {
      return NextResponse.json(
        { error: '자료 파일을 업로드해 주세요.' },
        { status: 400 }
      );
    }

    // 파일 크기 검증
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: '파일 용량은 50MB 이하여야 합니다.' },
        { status: 400 }
      );
    }

    // 파일 확장자 검증
    const fileExt = file.name.split('.').pop()?.toLowerCase() || '';
    if (!ALLOWED_EXTENSIONS.includes(fileExt)) {
      return NextResponse.json(
        { error: `허용되지 않는 파일 형식입니다. (${ALLOWED_EXTENSIONS.join(', ')})` },
        { status: 400 }
      );
    }

    // 1. Storage에 실제 자료 파일 업로드
    const fileTimestamp = Date.now();
    const safeFileName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
    const storageFilePath = `resources/${resourceCode}_${fileTimestamp}_${safeFileName}`;

    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const { error: uploadError } = await supabase.storage
      .from('jamyung-resources')
      .upload(storageFilePath, fileBuffer, {
        contentType: file.type || 'application/octet-stream',
        upsert: true,
      });

    if (uploadError) {
      return NextResponse.json(
        { error: `스토리지 업로드 실패: ${uploadError.message}` },
        { status: 500 }
      );
    }

    // 2. 썸네일 업로드 (있는 경우)
    let thumbnailPath: string | null = null;
    if (thumbnail && thumbnail.size > 0) {
      const thumbExt = thumbnail.name.split('.').pop()?.toLowerCase() || 'png';
      const thumbStoragePath = `thumbnails/${resourceCode}_${fileTimestamp}.${thumbExt}`;
      const thumbBuffer = Buffer.from(await thumbnail.arrayBuffer());

      const { error: thumbUploadError } = await supabase.storage
        .from('jamyung-resources')
        .upload(thumbStoragePath, thumbBuffer, {
          contentType: thumbnail.type || 'image/png',
          upsert: true,
        });

      if (!thumbUploadError) {
        // 썸네일 public URL 또는 경로 저장
        thumbnailPath = thumbStoragePath;
      }
    }

    // 태그 파싱
    const tags = tagsRaw
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    // 3. DB에 자료 정보 저장
    const { data: inserted, error: dbError } = await supabase
      .from('jamyung_resources')
      .insert({
        resource_code: resourceCode,
        title,
        slug,
        description,
        category,
        tags,
        file_path: storageFilePath,
        file_name: file.name,
        file_type: fileExt.toUpperCase(),
        file_size: file.size,
        thumbnail_path: thumbnailPath,
        status,
        visibility,
        youtube_url: youtubeUrl,
        related_course_url: relatedCourseUrl,
        related_course_title: relatedCourseTitle,
        is_featured: isFeatured,
        sort_order: sortOrder,
        published_at: status === 'published' ? new Date().toISOString() : null,
      })
      .select()
      .single();

    if (dbError) {
      return NextResponse.json(
        { error: `DB 저장 실패: ${dbError.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, resource: inserted });
  } catch (err: any) {
    console.error('Admin Resources POST error:', err);
    return NextResponse.json(
      { error: err.message || '자료 등록 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
