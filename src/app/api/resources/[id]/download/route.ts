import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await request.json().catch(() => ({}));
    const returnUrl = body.returnUrl || `/resources`;
    const utmSource = body.utm_source || null;
    const utmCampaign = body.utm_campaign || null;
    const referrer = request.headers.get('referer') || null;

    const supabase = await createClient();

    // 1. 자료 조회
    const { data: resource, error: resError } = await supabase
      .from('jamyung_resources')
      .select('*')
      .eq('id', id)
      .single();

    if (resError || !resource) {
      return NextResponse.json(
        { error: '자료를 찾을 수 없습니다.' },
        { status: 404 }
      );
    }

    // 2. 상태 확인
    if (resource.status !== 'published') {
      return NextResponse.json(
        { error: '현재 다운로드할 수 없는 상태의 자료입니다.' },
        { status: 403 }
      );
    }

    // 3. 사용자 인증 및 권한 확인
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (resource.visibility === 'member' && !user) {
      return NextResponse.json(
        {
          error: '회원 전용 자료입니다. 로그인 후 다운로드하실 수 있습니다.',
          loginRequired: true,
          redirectUrl: `/login?redirect=${encodeURIComponent(returnUrl)}`,
        },
        { status: 401 }
      );
    }

    if (resource.visibility === 'student') {
      // 향후 수강생 권한 확장 슬롯
      if (!user) {
        return NextResponse.json(
          {
            error: '수강생 전용 자료입니다. 로그인해 주세요.',
            loginRequired: true,
            redirectUrl: `/login?redirect=${encodeURIComponent(returnUrl)}`,
          },
          { status: 401 }
        );
      }
    }

    // 4. 다운로드 카운트 증가
    await supabase
      .from('jamyung_resources')
      .update({ download_count: (resource.download_count || 0) + 1 })
      .eq('id', id);

    // 5. 다운로드 로그 기록
    await supabase.from('jamyung_resource_downloads').insert({
      resource_id: id,
      user_id: user?.id || null,
      source: 'web',
      utm_source: utmSource,
      utm_campaign: utmCampaign,
      referrer: referrer,
    });

    // 6. Signed URL 발급 (유효시간: 300초 = 5분)
    const { data: signedData, error: signError } = await supabase.storage
      .from('jamyung-resources')
      .createSignedUrl(resource.file_path, 300, {
        download: resource.file_name || true,
      });

    if (signError || !signedData?.signedUrl) {
      // 파일이 스토리지에 없거나 public URL 형태인 경우 fallback
      if (resource.file_path.startsWith('http://') || resource.file_path.startsWith('https://')) {
        return NextResponse.json({
          success: true,
          downloadUrl: resource.file_path,
          fileName: resource.file_name,
        });
      }
      return NextResponse.json(
        { error: '파일 다운로드 링크 생성에 실패했습니다. 관리자에게 문의해 주세요.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      downloadUrl: signedData.signedUrl,
      fileName: resource.file_name,
    });
  } catch (error: any) {
    console.error('Download API error:', error);
    return NextResponse.json(
      { error: '다운로드 처리 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
