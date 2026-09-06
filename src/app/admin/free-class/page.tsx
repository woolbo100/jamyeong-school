import React from 'react';
import type { Metadata } from 'next';
import { createClient } from '@/utils/supabase/server';
import FreeClassClient, { FreeClassItem } from './FreeClassClient';

export const metadata: Metadata = {
  title: '무료특강 신청자 관리 | 자명스쿨 어드민',
};

export default async function AdminFreeClassPage() {
  const supabase = await createClient();

  let initialApplicants: FreeClassItem[] = [];

  try {
    const { data, error } = await supabase
      .from('free_class_applications')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      initialApplicants = data as FreeClassItem[];
    }
  } catch (err) {
    console.error('Free class applicants query error:', err);
  }

  return <FreeClassClient initialApplicants={initialApplicants} />;
}
