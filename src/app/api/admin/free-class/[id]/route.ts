import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { isAdminUser } from '@/lib/auth/admin';

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

    if (!(await isAdminUser(user, supabase))) {
      return NextResponse.json({ error: '관리자 권한 필요' }, { status: 403 });
    }

    const body = await request.json();
    const updatePayload: any = {
      updated_at: new Date().toISOString(),
    };

    if (body.status !== undefined) {
      updatePayload.status = body.status;
    }
    if (body.memo !== undefined) {
      updatePayload.memo = body.memo;
    }

    const { data, error } = await supabase
      .from('free_class_applications')
      .update(updatePayload)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, application: data });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
