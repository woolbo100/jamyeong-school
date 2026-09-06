import React from 'react';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { isAdminUser } from '@/lib/auth/admin';
import AdminSidebar from './AdminSidebar';

export const metadata: Metadata = {
  title: '관리자센터 | 자명스쿨',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 관리자 권한 서버 검증 (비관리자 접근 차단)
  if (!user || !isAdminUser(user)) {
    redirect('/login?redirect=/admin');
  }

  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#2E2723] flex flex-col md:flex-row relative z-20">
      <AdminSidebar userEmail={user.email} />
      <main className="flex-1 min-w-0 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
