import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { isAdminUser } from '@/lib/auth/admin';

// 1. 단건 조회 (GET)
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!isAdminUser(user)) {
      return NextResponse.json({ error: '관리자 권한 필요' }, { status: 403 });
    }

    const { data: resource, error } = await supabase
      .from('jamyung_resources')
      .select('*')
      .eq('id', id)
      .single();

    if (error || !resource) {
      return NextResponse.json({ error: '자료를 찾을 수 없습니다.' }, { status: 404 });
    }

    return NextResponse.json({ resource });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// 2. 자료 수정 (PATCH/POST)
export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!isAdminUser(user)) {
      return NextResponse.json({ error: '관리자 권한 필요' }, { status: 403 });
    }

    // 기존 자료 확인
    const { data: existing, error: findError } = await supabase
      .from('jamyung_resources')
      .select('*')
      .eq('id', id)
      .single();

    if (findError || !existing) {
      return NextResponse.json({ error: '자료를 찾을 수 없습니다.' }, { status: 404 });
    }

    const formData = await request.formData();
    const title = (formData.get('title') as string)?.trim();
    const description = (formData.get('description') as string) || '';
    const category = (formData.get('category') as string) || existing.category;
    const tagsRaw = (formData.get('tags') as string) || '';
    const status = (formData.get('status') as string) || existing.status;
    const visibility = (formData.get('visibility') as string) || existing.visibility;
    const youtubeUrl = (formData.get('youtube_url') as string) || null;
    const relatedCourseUrl = (formData.get('related_course_url') as string) || null;
    const relatedCourseTitle = (formData.get('related_course_title') as string) || null;
    const isFeatured = formData.get('is_featured') === 'true';
    const sortOrder = parseInt((formData.get('sort_order') as string) || '0', 10);
    const newFile = formData.get('file') as File | null;
    const newThumbnail = formData.get('thumbnail') as File | null;

    let storageFilePath = existing.file_path;
    let fileName = existing.file_name;
    let fileType = existing.file_type;
    let fileSize = existing.file_size;

    // 새 파일이 업로드된 경우 파일 교체
    if (newFile && newFile.size > 0) {
      const fileTimestamp = Date.now();
      const safeFileName = newFile.name.replace(/[^a-zA-Z0-9._-]/g, '_');
      const newPath = `resources/${existing.resource_code}_${fileTimestamp}_${safeFileName}`;
      const fileBuffer = Buffer.from(await newFile.arrayBuffer());

      const { error: uploadError } = await supabase.storage
        .from('jamyung-resources')
        .upload(newPath, fileBuffer, {
          contentType: newFile.type || 'application/octet-stream',
          upsert: true,
        });

      if (uploadError) {
        return NextResponse.json({ error: `파일 교체 실패: ${uploadError.message}` }, { status: 500 });
      }

      // 이전 파일 삭제 (정리)
      if (existing.file_path) {
        await supabase.storage.from('jamyung-resources').remove([existing.file_path]);
      }

      storageFilePath = newPath;
      fileName = newFile.name;
      fileType = newFile.name.split('.').pop()?.toUpperCase() || 'FILE';
      fileSize = newFile.size;
    }

    let thumbnailPath = existing.thumbnail_path;
    if (newThumbnail && newThumbnail.size > 0) {
      const thumbTimestamp = Date.now();
      const thumbExt = newThumbnail.name.split('.').pop()?.toLowerCase() || 'png';
      const newThumbPath = `thumbnails/${existing.resource_code}_${thumbTimestamp}.${thumbExt}`;
      const thumbBuffer = Buffer.from(await newThumbnail.arrayBuffer());

      const { error: thumbUploadError } = await supabase.storage
        .from('jamyung-resources')
        .upload(newThumbPath, thumbBuffer, {
          contentType: newThumbnail.type || 'image/png',
          upsert: true,
        });

      if (!thumbUploadError) {
        if (existing.thumbnail_path) {
          await supabase.storage.from('jamyung-resources').remove([existing.thumbnail_path]);
        }
        thumbnailPath = newThumbPath;
      }
    }

    const tags = tagsRaw
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const updatePayload: any = {
      title: title || existing.title,
      description,
      category,
      tags,
      file_path: storageFilePath,
      file_name: fileName,
      file_type: fileType,
      file_size: fileSize,
      thumbnail_path: thumbnailPath,
      status,
      visibility,
      youtube_url: youtubeUrl,
      related_course_url: relatedCourseUrl,
      related_course_title: relatedCourseTitle,
      is_featured: isFeatured,
      sort_order: sortOrder,
      updated_at: new Date().toISOString(),
    };

    if (status === 'published' && !existing.published_at) {
      updatePayload.published_at = new Date().toISOString();
    }

    const { data: updated, error: updateError } = await supabase
      .from('jamyung_resources')
      .update(updatePayload)
      .eq('id', id)
      .select()
      .single();

    if (updateError) {
      return NextResponse.json({ error: `DB 업데이트 실패: ${updateError.message}` }, { status: 500 });
    }

    return NextResponse.json({ success: true, resource: updated });
  } catch (err: any) {
    console.error('Admin Resource PATCH error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// 3. 자료 삭제 (DELETE)
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const { searchParams } = new URL(request.url);
    const hardDelete = searchParams.get('hard') === 'true';

    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!isAdminUser(user)) {
      return NextResponse.json({ error: '관리자 권한 필요' }, { status: 403 });
    }

    if (!hardDelete) {
      // 기본값: 보관(archived) 처리로 실수 방지
      const { error: archiveError } = await supabase
        .from('jamyung_resources')
        .update({ status: 'archived', updated_at: new Date().toISOString() })
        .eq('id', id);

      if (archiveError) {
        return NextResponse.json({ error: archiveError.message }, { status: 500 });
      }

      return NextResponse.json({ success: true, message: '자료가 보관 처리되었습니다.' });
    }

    // Hard Delete: 실제 Storage 파일 및 DB 데이터 완전 삭제
    const { data: existing } = await supabase
      .from('jamyung_resources')
      .select('file_path, thumbnail_path')
      .eq('id', id)
      .single();

    if (existing) {
      const filesToRemove = [existing.file_path, existing.thumbnail_path].filter(Boolean) as string[];
      if (filesToRemove.length > 0) {
        await supabase.storage.from('jamyung-resources').remove(filesToRemove);
      }
    }

    const { error: deleteError } = await supabase
      .from('jamyung_resources')
      .delete()
      .eq('id', id);

    if (deleteError) {
      return NextResponse.json({ error: deleteError.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: '자료가 완전히 삭제되었습니다.' });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
