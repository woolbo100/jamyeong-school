'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Plus, Search, Edit3, Trash2, ExternalLink, Download, Archive, Eye } from 'lucide-react';
import type { ResourceItem } from '@/app/resources/ResourcesClient';

interface Props {
  initialResources: ResourceItem[];
}

export default function AdminResourcesClient({ initialResources }: Props) {
  const router = useRouter();
  const [resources, setResources] = useState<ResourceItem[]>(initialResources);
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDeletingId, setIsDeletingId] = useState<string | null>(null);

  // 필터링
  const filtered = resources.filter((item) => {
    const matchStatus =
      selectedStatus === 'all' || item.status === selectedStatus;
    const q = searchQuery.toLowerCase().trim();
    const matchSearch =
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.resource_code.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q);
    return matchStatus && matchSearch;
  });

  const handleDelete = async (id: string, hard = false) => {
    const confirmMsg = hard
      ? '이 자료를 완전히 삭제하시겠습니까? 파일 및 다운로드 기록도 함께 삭제됩니다.'
      : '이 자료를 보관(archived) 상태로 변경하시겠습니까?';

    if (!confirm(confirmMsg)) return;

    try {
      setIsDeletingId(id);
      const res = await fetch(`/api/admin/resources/${id}${hard ? '?hard=true' : ''}`, {
        method: 'DELETE',
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.error || '삭제 실패');
        return;
      }

      alert(data.message);
      if (hard) {
        setResources((prev) => prev.filter((r) => r.id !== id));
      } else {
        setResources((prev) =>
          prev.map((r) => (r.id === id ? { ...r, status: 'archived' } : r))
        );
      }
      router.refresh();
    } catch (err) {
      console.error(err);
      alert('오류가 발생했습니다.');
    } finally {
      setIsDeletingId(null);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">공개중</span>;
      case 'draft':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">작성중</span>;
      case 'hidden':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-zinc-100 text-zinc-700 border border-zinc-300">숨김</span>;
      case 'archived':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-300">보관됨</span>;
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#2E2723] p-6 md:p-10 selection:bg-[#C6A66B]/20">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* 상단 헤더 */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E8DFD3]">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8E6D38] mb-1">
              <span>ADMIN PANEL</span>
              <span>•</span>
              <span>자명자료실 관리</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#2E2723]">자료 목록 및 업로드 관리</h1>
            <p className="text-xs text-[#7C6656] mt-1">유튜브, SNS, 강의와 연계된 실전 교육자료를 등록하고 관리합니다.</p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/resources"
              target="_blank"
              className="px-4 py-2.5 rounded-xl border border-[#D6C6A8] bg-white text-[#4A3F35] hover:text-[#2E2723] text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <span>공개 자료실 바로가기</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/admin/resources/new"
              className="px-5 py-2.5 rounded-xl bg-[#2E2723] hover:bg-[#1E1815] text-[#FFFBD1] text-xs font-bold flex items-center gap-1.5 transition-all shadow-md"
            >
              <Plus className="w-4 h-4" />
              <span>신규 자료 등록</span>
            </Link>
          </div>
        </div>

        {/* 탭 및 필터 바 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* 상태 탭 */}
          <div className="flex items-center gap-1 bg-white p-1 rounded-2xl border border-[#E8DFD3] shadow-sm overflow-x-auto">
            {[
              { key: 'all', label: '전체' },
              { key: 'published', label: '공개' },
              { key: 'draft', label: '작성중' },
              { key: 'hidden', label: '숨김' },
              { key: 'archived', label: '보관' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedStatus(tab.key)}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedStatus === tab.key
                    ? 'bg-[#2E2723] text-[#FFFBD1]'
                    : 'text-[#6E5A4D] hover:text-[#2E2723]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 검색창 */}
          <div className="relative min-w-[280px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C7B6E]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="자료코드, 제목, 카테고리 검색"
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-[#E8DFD3] text-xs text-[#2E2723] focus:outline-none focus:ring-2 focus:ring-[#C6A66B]"
            />
          </div>
        </div>

        {/* 자료 목록 테이블 */}
        <div className="bg-white rounded-3xl border border-[#E8DFD3] shadow-[0_4px_20px_rgba(46,39,35,0.04)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#FAF7F2] border-b border-[#E8DFD3] text-[#7C6656] uppercase tracking-wider font-bold">
                  <th className="py-4 px-6">코드</th>
                  <th className="py-4 px-6">자료 제목</th>
                  <th className="py-4 px-6">카테고리</th>
                  <th className="py-4 px-6">상태</th>
                  <th className="py-4 px-6">공개범위</th>
                  <th className="py-4 px-6 text-center">다운로드</th>
                  <th className="py-4 px-6 text-center">추천(Featured)</th>
                  <th className="py-4 px-6">등록일</th>
                  <th className="py-4 px-6 text-right">관리</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F2EAE0]">
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="py-16 text-center text-[#8C7B6E]">
                      등록된 자료가 없습니다.
                    </td>
                  </tr>
                ) : (
                  filtered.map((r) => (
                    <tr key={r.id} className="hover:bg-[#FAF7F2]/60 transition-colors">
                      <td className="py-4 px-6 font-mono font-bold text-[#8E6D38]">
                        {r.resource_code}
                      </td>
                      <td className="py-4 px-6 max-w-xs">
                        <Link
                          href={`/resources/${r.slug}`}
                          target="_blank"
                          className="font-bold text-[#2E2723] hover:text-[#8E6D38] transition-colors line-clamp-1 flex items-center gap-1.5"
                        >
                          <span>{r.title}</span>
                          <ExternalLink className="w-3 h-3 text-[#A8988B]" />
                        </Link>
                        <span className="text-[11px] text-[#8C7B6E] line-clamp-1">{r.file_name}</span>
                      </td>
                      <td className="py-4 px-6 font-medium text-[#5C4C40]">
                        {r.category}
                      </td>
                      <td className="py-4 px-6">
                        {getStatusBadge(r.status)}
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-[11px] px-2 py-0.5 rounded bg-[#F7F2EB] text-[#6E5A4D] font-medium border border-[#EBE3D7]">
                          {r.visibility === 'member' ? '회원전용' : r.visibility}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center font-bold text-[#2E2723]">
                        {r.download_count}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {r.is_featured ? (
                          <span className="text-amber-500 font-bold">★ 추천</span>
                        ) : (
                          <span className="text-[#C5B8AA]">-</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-[#7C6656] text-[11px]">
                        {new Date(r.created_at).toLocaleDateString()}
                      </td>
                      <td className="py-4 px-6 text-right space-x-2">
                        <Link
                          href={`/admin/resources/${r.id}/edit`}
                          className="p-1.5 rounded-lg text-[#6E5A4D] hover:text-[#2E2723] hover:bg-[#F7F2EB] inline-block transition-colors"
                          title="수정"
                        >
                          <Edit3 className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => handleDelete(r.id, false)}
                          disabled={isDeletingId === r.id}
                          className="p-1.5 rounded-lg text-amber-700 hover:bg-amber-50 transition-colors cursor-pointer"
                          title="보관 처리"
                        >
                          <Archive className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(r.id, true)}
                          disabled={isDeletingId === r.id}
                          className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                          title="영구 삭제"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
