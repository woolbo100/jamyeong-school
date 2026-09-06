'use client';

import React, { useState, useMemo } from 'react';
import { Search, Download, TrendingUp, Calendar, Filter } from 'lucide-react';

export interface DownloadLogItem {
  id: string;
  userName: string;
  userEmail: string;
  resourceCode: string;
  resourceTitle: string;
  downloaded_at: string;
  source: string | null;
  utm_source: string | null;
  utm_campaign: string | null;
  referrer: string | null;
}

interface Props {
  initialLogs: DownloadLogItem[];
  todayCount: number;
  monthCount: number;
  topResource: { title: string; count: number } | null;
}

export default function DownloadsClient({
  initialLogs,
  todayCount,
  monthCount,
  topResource,
}: Props) {
  const [logs] = useState<DownloadLogItem[]>(initialLogs);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSource, setSelectedSource] = useState('all');

  // 유입 경로 목록
  const sources = useMemo(() => {
    const set = new Set(logs.map((l) => l.utm_source || l.source).filter(Boolean));
    return ['all', ...Array.from(set)];
  }, [logs]);

  // 검색 및 필터링
  const filtered = useMemo(() => {
    return logs.filter((item) => {
      const src = item.utm_source || item.source || 'direct';
      const matchSource = selectedSource === 'all' || src === selectedSource;

      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.userName.toLowerCase().includes(q) ||
        item.userEmail.toLowerCase().includes(q) ||
        item.resourceCode.toLowerCase().includes(q) ||
        item.resourceTitle.toLowerCase().includes(q);

      return matchSource && matchSearch;
    });
  }, [logs, selectedSource, searchQuery]);

  return (
    <div className="p-6 md:p-10 space-y-8 selection:bg-[#C6A66B]/20">
      {/* 헤더 */}
      <div className="pb-6 border-b border-[#E8DFD3]">
        <h1 className="text-2xl md:text-3xl font-extrabold text-[#2E2723]">자료 다운로드 관리</h1>
        <p className="text-xs text-[#7C6656] mt-1">자료실 자료의 실전 다운로드 로그와 유입 경로를 추적합니다.</p>
      </div>

      {/* 상단 3개 요약 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-[#E8DFD3] shadow-sm space-y-2">
          <span className="text-xs text-[#7C6656] font-semibold flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#8E6D38]" /> 오늘 다운로드
          </span>
          <p className="text-2xl font-black text-[#2E2723]">{todayCount.toLocaleString()}건</p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#E8DFD3] shadow-sm space-y-2">
          <span className="text-xs text-[#7C6656] font-semibold flex items-center gap-1.5">
            <Download className="w-3.5 h-3.5 text-emerald-600" /> 이번 달 다운로드
          </span>
          <p className="text-2xl font-black text-[#2E2723]">{monthCount.toLocaleString()}건</p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#E8DFD3] shadow-sm space-y-2">
          <span className="text-xs text-[#7C6656] font-semibold flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-[#C6A66B]" /> 가장 인기 있는 자료
          </span>
          <p className="text-base font-bold text-[#2E2723] truncate">
            {topResource ? topResource.title : '아직 기록 없음'}
          </p>
          {topResource && (
            <span className="text-[11px] text-[#8C7B6E]">누적 {topResource.count}회</span>
          )}
        </div>
      </div>

      {/* 검색 및 필터 바 */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C7B6E]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="자료코드, 자료명, 회원명, 이메일 검색"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#E8DFD3] text-xs text-[#2E2723] focus:outline-none focus:ring-2 focus:ring-[#C6A66B]"
          />
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="text-xs font-semibold text-[#7C6656]">유입 경로:</span>
          <select
            value={selectedSource}
            onChange={(e) => setSelectedSource(e.target.value)}
            className="px-3 py-2 rounded-xl bg-white border border-[#E8DFD3] text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#C6A66B]"
          >
            {sources.map((src) => (
              <option key={src} value={src}>
                {src === 'all' ? '전체 경로' : src}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 다운로드 로그 테이블 */}
      <div className="bg-white rounded-3xl border border-[#E8DFD3] shadow-[0_4px_20px_rgba(46,39,35,0.03)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#FAF7F2] border-b border-[#E8DFD3] text-[#7C6656] uppercase tracking-wider font-bold">
                <th className="py-4 px-6">다운로드 일시</th>
                <th className="py-4 px-6">회원 이름</th>
                <th className="py-4 px-6">이메일</th>
                <th className="py-4 px-6">자료 코드</th>
                <th className="py-4 px-6">자료명</th>
                <th className="py-4 px-6">유입 경로</th>
                <th className="py-4 px-6">캠페인</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F2EAE0]">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-16 text-center text-[#8C7B6E]">
                    자료 다운로드 기록이 없습니다.
                  </td>
                </tr>
              ) : (
                filtered.map((log) => (
                  <tr key={log.id} className="hover:bg-[#FAF7F2]/60 transition-colors">
                    <td className="py-4 px-6 text-[#7C6656] whitespace-nowrap">
                      {new Date(log.downloaded_at).toLocaleString()}
                    </td>
                    <td className="py-4 px-6 font-bold text-[#2E2723]">
                      {log.userName}
                    </td>
                    <td className="py-4 px-6 text-[#5C4C40]">
                      {log.userEmail}
                    </td>
                    <td className="py-4 px-6 font-mono font-bold text-[#8E6D38]">
                      {log.resourceCode}
                    </td>
                    <td className="py-4 px-6 font-semibold text-[#2E2723] max-w-xs truncate">
                      {log.resourceTitle}
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-[11px] px-2 py-0.5 rounded bg-[#F7F2EB] text-[#7C6656] border border-[#EBE3D7]">
                        {log.utm_source || log.source || 'direct'}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-[#8C7B6E] text-[11px]">
                      {log.utm_campaign || '-'}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
