import React from 'react';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { isAdminUser } from '@/lib/auth/admin';
import AdminResourcesClient from './AdminResourcesClient';
import type { ResourceItem } from '@/app/resources/ResourcesClient';

export const metadata: Metadata = {
  title: '자명자료실 관리 | 자명스쿨 어드민',
};

export default async function AdminResourcesPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 관리자 권한 검사
  if (!user || !(await isAdminUser(user, supabase))) {
    redirect('/login?redirect=/admin/resources');
  }

  // 전체 자료 목록 조회
  let resources: ResourceItem[] = [];
  try {
    const { data, error } = await supabase
      .from('jamyung_resources')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      resources = data as ResourceItem[];
    }
  } catch (err) {
    console.error('Admin resource query error:', err);
  }

  return <AdminResourcesClient initialResources={resources} />;
}
