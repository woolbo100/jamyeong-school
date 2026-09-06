import React from 'react';
import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { isAdminUser } from '@/lib/auth/admin';
import EditResourceClient from './EditResourceClient';
import type { ResourceItem } from '@/app/resources/ResourcesClient';

export const metadata: Metadata = {
  title: '자료 수정 | 자명스쿨 어드민',
};

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditResourcePage({ params }: Props) {
  const { id } = await params;
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !isAdminUser(user)) {
    redirect('/login?redirect=/admin/resources');
  }

  const { data: resource, error } = await supabase
    .from('jamyung_resources')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !resource) {
    notFound();
  }

  return <EditResourceClient initialData={resource as ResourceItem} />;
}
