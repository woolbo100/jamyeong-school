'use client';

import React, { useState, useMemo } from 'react';
import { Search, UserCheck, Calendar, Download, GraduationCap, X, Eye } from 'lucide-react';

export interface MemberItem {
  id: string;
  name: string;
  email: string;
  created_at: string;
  last_sign_in_at: string | null;
  signup_source: string;
  download_count: number;
  has_applied_free_class: boolean;
  status: string;
}

interface Props {
  initialMembers: MemberItem[];
}

export default function MembersClient({ initialMembers }: Props) {
  const [members] = useState<MemberItem[]>(initialMembers);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSource, setSelectedSource] = useState('all');
  const [selectedMember, setSelectedMember] = useState<MemberItem | null>(null);

  // 유입 경로 목록
  const sources = useMemo(() => {
    const set = new Set(members.map((m) => m.signup_source).filter(Boolean));
    return ['all', ...Array.from(set)];
  }, [members]);

  // 검색 및 필터링
  const filtered = useMemo(() => {
    return members.filter((m) => {
      const matchSource =
        selectedSource === 'all' || m.signup_source === selectedSource;

      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        m.name.toLowerCase().includes(q) ||
        m.email.toLowerCase().includes(q);

      return matchSource && matchSearch;
    });
  }, [members, selectedSource, searchQuery]);

  return (
    <div className="p-6 md:p-10 space-y-8 selection:bg-[#C6A66B]/20">
      {/* 헤더 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8DFD3]">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#2E2723]">회원 관리</h1>
          <p className="text-xs text-[#7C6656] mt-1">자명스쿨에 가입한 회원 목록 및 활동 이력을 조회합니다.</p>
        </div>
        <div className="text-xs px-3.5 py-1.5 rounded-full bg-[#FAF2E6] border border-[#E8DFD3] text-[#8E6D38] font-bold self-start sm:self-auto">
          총 회원 {members.length}명
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
            placeholder="이름 또는 이메일로 검색"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#E8DFD3] text-xs text-[#2E2723] focus:outline-none focus:ring-2 focus:ring-[#C6A66B]"
          />
        </div>

        {/* 가입경로 필터 */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="text-xs font-semibold text-[#7C6656]">가입 경로:</span>
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

      {/* 회원 테이블 */}
      <div className="bg-white rounded-3xl border border-[#E8DFD3] shadow-[0_4px_20px_rgba(46,39,35,0.03)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#FAF7F2] border-b border-[#E8DFD3] text-[#7C6656] uppercase tracking-wider font-bold">
                <th className="py-4 px-6">이름</th>
                <th className="py-4 px-6">이메일</th>
                <th className="py-4 px-6">가입일</th>
                <th className="py-4 px-6">최근 로그인</th>
                <th className="py-4 px-6">가입 경로</th>
                <th className="py-4 px-6 text-center">다운로드</th>
                <th className="py-4 px-6 text-center">무료특강</th>
                <th className="py-4 px-6 text-right">상세</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F2EAE0]">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-16 text-center text-[#8C7B6E]">
                    조건에 일치하는 회원이 없습니다.
                  </td>
                </tr>
              ) : (
                filtered.map((m) => (
                  <tr key={m.id} className="hover:bg-[#FAF7F2]/60 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#2E2723]">
                      {m.name || '회원'}
                    </td>
                    <td className="py-4 px-6 text-[#5C4C40]">
                      {m.email}
                    </td>
                    <td className="py-4 px-6 text-[#7C6656] text-[11px]">
                      {new Date(m.created_at).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-6 text-[#7C6656] text-[11px]">
                      {m.last_sign_in_at
                        ? new Date(m.last_sign_in_at).toLocaleDateString()
                        : '-'}
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-[11px] px-2 py-0.5 rounded bg-[#F7F2EB] text-[#7C6656] border border-[#EBE3D7]">
                        {m.signup_source || 'direct'}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center font-semibold text-[#2E2723]">
                      {m.download_count}건
                    </td>
                    <td className="py-4 px-6 text-center">
                      {m.has_applied_free_class ? (
                        <span className="text-emerald-700 font-bold">신청완료</span>
                      ) : (
                        <span className="text-[#C5B8AA]">-</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => setSelectedMember(m)}
                        className="px-3 py-1 rounded-lg bg-[#F7F2EB] hover:bg-[#EFE7DC] text-[#4A3F35] text-[11px] font-bold transition-colors cursor-pointer"
                      >
                        상세보기
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 회원 상세 모달 */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-[#E8DFD3] p-6 md:p-8 max-w-lg w-full shadow-2xl space-y-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-[#F2EAE0]">
              <div className="flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-[#8E6D38]" />
                <h3 className="text-lg font-bold text-[#2E2723]">회원 상세 정보</h3>
              </div>
              <button
                onClick={() => setSelectedMember(null)}
                className="text-[#8C7B6E] hover:text-[#2E2723] p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-2 border-b border-[#F9F6F0]">
                <span className="text-[#7C6656]">이름</span>
                <span className="font-bold text-[#2E2723]">{selectedMember.name}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#F9F6F0]">
                <span className="text-[#7C6656]">이메일</span>
                <span className="font-bold text-[#2E2723]">{selectedMember.email}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#F9F6F0]">
                <span className="text-[#7C6656]">가입 일시</span>
                <span className="text-[#2E2723]">{new Date(selectedMember.created_at).toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#F9F6F0]">
                <span className="text-[#7C6656]">최근 로그인</span>
                <span className="text-[#2E2723]">
                  {selectedMember.last_sign_in_at
                    ? new Date(selectedMember.last_sign_in_at).toLocaleString()
                    : '이력 없음'}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#F9F6F0]">
                <span className="text-[#7C6656]">가입 유입 경로</span>
                <span className="font-semibold text-[#8E6D38]">{selectedMember.signup_source}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#F9F6F0]">
                <span className="text-[#7C6656]">총 다운로드 자료</span>
                <span className="font-bold text-[#2E2723]">{selectedMember.download_count}건</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-[#7C6656]">무료특강 신청 여부</span>
                <span className="font-bold text-emerald-700">
                  {selectedMember.has_applied_free_class ? '신청 이력 있음' : '없음'}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F2EAE0] flex justify-end">
              <button
                onClick={() => setSelectedMember(null)}
                className="px-5 py-2 rounded-xl bg-[#2E2723] text-white text-xs font-bold hover:bg-[#1E1815]"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
