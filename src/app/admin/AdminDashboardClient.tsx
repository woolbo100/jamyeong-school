'use client';

import React from 'react';
import Link from 'next/link';
import {
  Users,
  UserPlus,
  Download,
  GraduationCap,
  TrendingUp,
  Clock,
  ArrowRight,
  FileText,
} from 'lucide-react';

export interface DashboardStats {
  totalMembers: number;
  newMembersThisMonth: number;
  downloadsThisMonth: number;
  totalFreeClassApplicants: number;
  newApplicantsLast7Days: number;
}

export interface RecentMember {
  id: string;
  name: string;
  email: string;
  created_at: string;
}

export interface RecentDownload {
  id: string;
  userName: string;
  resourceCode: string;
  resourceTitle: string;
  downloaded_at: string;
}

export interface RecentApplicant {
  id: string;
  name: string;
  classTitle: string;
  status: string;
  created_at: string;
}

interface Props {
  stats: DashboardStats;
  recentMembers: RecentMember[];
  recentDownloads: RecentDownload[];
  recentApplicants: RecentApplicant[];
}

export default function AdminDashboardClient({
  stats,
  recentMembers,
  recentDownloads,
  recentApplicants,
}: Props) {
  const kpis = [
    {
      title: '총 회원 수',
      value: `${stats.totalMembers.toLocaleString()}명`,
      icon: Users,
      color: 'text-amber-700 bg-amber-50 border-amber-200',
    },
    {
      title: '이번 달 신규 회원',
      value: `${stats.newMembersThisMonth.toLocaleString()}명`,
      icon: UserPlus,
      color: 'text-blue-700 bg-blue-50 border-blue-200',
    },
    {
      title: '이번 달 자료 다운로드',
      value: `${stats.downloadsThisMonth.toLocaleString()}건`,
      icon: Download,
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    },
    {
      title: '무료특강 신청자',
      value: `${stats.totalFreeClassApplicants.toLocaleString()}명`,
      icon: GraduationCap,
      color: 'text-purple-700 bg-purple-50 border-purple-200',
    },
    {
      title: '최근 7일 신규 신청',
      value: `${stats.newApplicantsLast7Days.toLocaleString()}명`,
      icon: TrendingUp,
      color: 'text-rose-700 bg-rose-50 border-rose-200',
    },
  ];

  return (
    <div className="p-6 md:p-10 space-y-10 selection:bg-[#C6A66B]/20">
      {/* 대시보드 타이틀 */}
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-[#2E2723]">운영 대시보드</h1>
        <p className="text-xs text-[#7C6656] mt-1">자명스쿨의 회원, 자료 다운로드, 무료특강 신청 현황을 한눈에 확인합니다.</p>
      </div>

      {/* 5대 KPI 카드 그리드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-[#E8DFD3] shadow-[0_2px_12px_rgba(46,39,35,0.03)] flex flex-col justify-between space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#7C6656]">{kpi.title}</span>
                <div className={`p-2 rounded-xl border ${kpi.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <p className="text-2xl font-black text-[#2E2723] tracking-tight">{kpi.value}</p>
            </div>
          );
        })}
      </div>

      {/* 최근 활동 3영역 (최근 회원, 최근 다운로드, 최근 특강 신청) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 1. 최근 가입 회원 */}
        <div className="rounded-2xl bg-white border border-[#E8DFD3] p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#F2EAE0] mb-4">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#8E6D38]" />
                <h2 className="text-sm font-bold text-[#2E2723]">최근 가입 회원</h2>
              </div>
              <span className="text-[11px] text-[#8C7B6E]">최근 5건</span>
            </div>

            <div className="divide-y divide-[#F2EAE0]">
              {recentMembers.length === 0 ? (
                <p className="py-8 text-center text-xs text-[#8C7B6E]">가입 회원이 없습니다.</p>
              ) : (
                recentMembers.slice(0, 5).map((m) => (
                  <div key={m.id} className="py-3 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-bold text-[#2E2723]">{m.name || '자명스쿨 회원'}</p>
                      <p className="text-[11px] text-[#8C7B6E]">{m.email}</p>
                    </div>
                    <span className="text-[10px] text-[#A8988B] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {new Date(m.created_at).toLocaleDateString()}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-[#F2EAE0]">
            <Link
              href="/admin/members"
              className="w-full py-2 rounded-xl bg-[#F7F2EB] hover:bg-[#EFE7DC] text-[#4A3F35] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>회원 전체 보기</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* 2. 최근 다운로드 */}
        <div className="rounded-2xl bg-white border border-[#E8DFD3] p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#F2EAE0] mb-4">
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4 text-[#8E6D38]" />
                <h2 className="text-sm font-bold text-[#2E2723]">최근 다운로드</h2>
              </div>
              <span className="text-[11px] text-[#8C7B6E]">최근 5건</span>
            </div>

            <div className="divide-y divide-[#F2EAE0]">
              {recentDownloads.length === 0 ? (
                <p className="py-8 text-center text-xs text-[#8C7B6E]">다운로드 기록이 없습니다.</p>
              ) : (
                recentDownloads.slice(0, 5).map((d) => (
                  <div key={d.id} className="py-3 flex items-center justify-between text-xs">
                    <div className="max-w-[180px]">
                      <span className="text-[10px] font-mono font-bold text-[#8E6D38] px-1.5 py-0.5 rounded bg-[#F7F2EB] mr-1.5">
                        {d.resourceCode}
                      </span>
                      <p className="font-bold text-[#2E2723] truncate inline">{d.resourceTitle}</p>
                      <p className="text-[11px] text-[#8C7B6E] mt-0.5">{d.userName}</p>
                    </div>
                    <span className="text-[10px] text-[#A8988B] whitespace-nowrap">
                      {new Date(d.downloaded_at).toLocaleDateString()}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-[#F2EAE0]">
            <Link
              href="/admin/downloads"
              className="w-full py-2 rounded-xl bg-[#F7F2EB] hover:bg-[#EFE7DC] text-[#4A3F35] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>다운로드 기록 전체 보기</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* 3. 최근 무료특강 신청 */}
        <div className="rounded-2xl bg-white border border-[#E8DFD3] p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#F2EAE0] mb-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#8E6D38]" />
                <h2 className="text-sm font-bold text-[#2E2723]">최근 무료특강 신청</h2>
              </div>
              <span className="text-[11px] text-[#8C7B6E]">최근 5건</span>
            </div>

            <div className="divide-y divide-[#F2EAE0]">
              {recentApplicants.length === 0 ? (
                <p className="py-8 text-center text-xs text-[#8C7B6E]">아직 신청자가 없습니다.</p>
              ) : (
                recentApplicants.slice(0, 5).map((a) => (
                  <div key={a.id} className="py-3 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-bold text-[#2E2723]">{a.name}</p>
                      <p className="text-[11px] text-[#8C7B6E]">{a.classTitle}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 font-bold block mb-1">
                        {a.status === 'applied' ? '신청완료' : a.status}
                      </span>
                      <span className="text-[10px] text-[#A8988B]">
                        {new Date(a.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-[#F2EAE0]">
            <Link
              href="/admin/free-class"
              className="w-full py-2 rounded-xl bg-[#F7F2EB] hover:bg-[#EFE7DC] text-[#4A3F35] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>신청자 전체 보기</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
