'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  Download,
  GraduationCap,
  FolderArchive,
  ExternalLink,
  LogOut,
  Menu,
  X,
  ShieldCheck,
} from 'lucide-react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

const NAV_ITEMS = [
  {
    name: '대시보드',
    href: '/admin',
    icon: LayoutDashboard,
    exact: true,
  },
  {
    name: '회원관리',
    href: '/admin/members',
    icon: Users,
  },
  {
    name: '자료 다운로드',
    href: '/admin/downloads',
    icon: Download,
  },
  {
    name: '무료특강 신청자',
    href: '/admin/free-class',
    icon: GraduationCap,
  },
  {
    name: '자명자료실',
    href: '/admin/resources',
    icon: FolderArchive,
  },
];

interface Props {
  userEmail?: string;
}

export default function AdminSidebar({ userEmail }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/login');
  };

  const isActive = (item: typeof NAV_ITEMS[0]) => {
    if (item.exact) {
      return pathname === item.href;
    }
    return pathname.startsWith(item.href);
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full justify-between bg-[#181513] text-[#FAF7F2] p-5 border-r border-[#2C2622]">
      {/* Top Section */}
      <div className="space-y-6">
        {/* Brand Header */}
        <div className="flex items-center justify-between pb-5 border-b border-[#2C2622]">
          <Link href="/admin" className="flex items-center gap-2.5">
            <span className="text-xl font-black text-[#C6A66B] tracking-tight">JM</span>
            <div>
              <span className="text-base font-bold text-white block leading-none">자명스쿨</span>
              <span className="text-[10px] text-[#A8988B] tracking-widest uppercase font-semibold">Admin Center</span>
            </div>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="md:hidden text-[#A8988B] hover:text-white p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Admin Badge */}
        <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5 flex items-center gap-2.5">
          <ShieldCheck className="w-4 h-4 text-[#C6A66B]" />
          <div className="overflow-hidden">
            <span className="text-[11px] font-bold text-[#E5DCD0] block">관리자 모드</span>
            <span className="text-[10px] text-[#8C7B6E] truncate block">{userEmail || 'buzasun@naver.com'}</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1.5 pt-2">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = isActive(item);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  active
                    ? 'bg-[#C6A66B] text-[#141210] shadow-md font-bold'
                    : 'text-[#C5B8AA] hover:bg-white/[0.06] hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${active ? 'text-[#141210]' : 'text-[#8C7B6E]'}`} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="pt-6 border-t border-[#2C2622] space-y-2">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-[#A8988B] hover:text-white hover:bg-white/[0.04] transition-colors"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>자명스쿨 사이트 바로가기</span>
        </Link>

        <button
          onClick={handleSignOut}
          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 transition-colors cursor-pointer"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>관리자 로그아웃</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar (Fixed Left) */}
      <aside className="hidden md:block w-64 h-screen sticky top-0 flex-shrink-0 z-40">
        <SidebarContent />
      </aside>

      {/* Mobile Top Header */}
      <div className="md:hidden sticky top-0 z-40 flex items-center justify-between bg-[#181513] text-white px-5 py-3 border-b border-[#2C2622]">
        <Link href="/admin" className="flex items-center gap-2">
          <span className="font-black text-[#C6A66B] text-lg">JM</span>
          <span className="font-bold text-sm">관리자센터</span>
        </Link>

        <button
          onClick={() => setMobileOpen(true)}
          className="p-1.5 rounded-lg bg-white/10 text-white focus:outline-none"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm">
          <div className="w-72 h-full">
            <SidebarContent />
          </div>
        </div>
      )}
    </>
  );
}
