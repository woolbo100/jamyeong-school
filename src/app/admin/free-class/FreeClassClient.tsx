'use client';

import React, { useState, useMemo } from 'react';
import { Search, GraduationCap, Phone, Mail, Edit2, Check, X, AlertCircle } from 'lucide-react';

export interface FreeClassItem {
  id: string;
  name: string;
  phone: string | null;
  email: string;
  interest_course: string | null;
  class_title: string;
  status: string;
  memo: string | null;
  source: string | null;
  created_at: string;
}

const STATUS_MAP: Record<string, { label: string; color: string }> = {
  applied: { label: '신청완료', color: 'bg-blue-100 text-blue-800 border-blue-200' },
  notified: { label: '안내발송', color: 'bg-purple-100 text-purple-800 border-purple-200' },
  expected: { label: '참석예정', color: 'bg-amber-100 text-amber-800 border-amber-200' },
  attended: { label: '참석', color: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
  absent: { label: '불참', color: 'bg-zinc-100 text-zinc-700 border-zinc-200' },
  converted: { label: '유료전환', color: 'bg-[#C6A66B]/20 text-[#8E6D38] border-[#C6A66B]/40 font-bold' },
  cancelled: { label: '취소', color: 'bg-rose-100 text-rose-800 border-rose-200' },
};

interface Props {
  initialApplicants: FreeClassItem[];
}

export default function FreeClassClient({ initialApplicants }: Props) {
  const [applicants, setApplicants] = useState<FreeClassItem[]>(initialApplicants);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [editingMemoId, setEditingMemoId] = useState<string | null>(null);
  const [memoText, setMemoText] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 2500);
  };

  // 검색 및 상태 필터
  const filtered = useMemo(() => {
    return applicants.filter((item) => {
      const matchStatus = selectedStatus === 'all' || item.status === selectedStatus;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.email.toLowerCase().includes(q) ||
        (item.phone && item.phone.includes(q)) ||
        item.class_title.toLowerCase().includes(q) ||
        (item.interest_course && item.interest_course.toLowerCase().includes(q));

      return matchStatus && matchSearch;
    });
  }, [applicants, selectedStatus, searchQuery]);

  // 원클릭 상태 변경
  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/admin/free-class/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        setApplicants((prev) =>
          prev.map((a) => (a.id === id ? { ...a, status: newStatus } : a))
        );
        showToast('신청자 상태가 변경되었습니다.');
      } else {
        alert('상태 변경 실패');
      }
    } catch (err) {
      console.error(err);
      alert('오류 발생');
    }
  };

  // 메모 저장
  const handleSaveMemo = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/free-class/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ memo: memoText }),
      });

      if (res.ok) {
        setApplicants((prev) =>
          prev.map((a) => (a.id === id ? { ...a, memo: memoText } : a))
        );
        setEditingMemoId(null);
        showToast('메모가 저장되었습니다.');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6 md:p-10 space-y-8 selection:bg-[#C6A66B]/20 relative">
      {/* 토스트 알림 */}
      {toastMessage && (
        <div className="fixed top-6 right-6 z-50 px-4 py-2.5 rounded-xl bg-[#2E2723] text-[#FFFBD1] text-xs font-bold shadow-xl border border-[#D6C6A8] animate-in fade-in slide-in-from-top-2">
          {toastMessage}
        </div>
      )}

      {/* 헤더 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8DFD3]">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#2E2723]">무료특강 신청자 관리</h1>
          <p className="text-xs text-[#7C6656] mt-1">온라인/오프라인 무료특강 신청자의 연락처와 참여 상태를 관리합니다.</p>
        </div>
        <div className="text-xs px-3.5 py-1.5 rounded-full bg-[#FAF2E6] border border-[#E8DFD3] text-[#8E6D38] font-bold self-start sm:self-auto">
          총 신청자 {applicants.length}명
        </div>
      </div>

      {/* 검색 및 상태 필터 */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C7B6E]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="이름, 연락처, 이메일 검색"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#E8DFD3] text-xs text-[#2E2723] focus:outline-none focus:ring-2 focus:ring-[#C6A66B]"
          />
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="text-xs font-semibold text-[#7C6656]">상태 필터:</span>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-3 py-2 rounded-xl bg-white border border-[#E8DFD3] text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#C6A66B]"
          >
            <option value="all">전체 상태</option>
            {Object.entries(STATUS_MAP).map(([key, info]) => (
              <option key={key} value={key}>{info.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* 신청자 목록 테이블 */}
      <div className="bg-white rounded-3xl border border-[#E8DFD3] shadow-[0_4px_20px_rgba(46,39,35,0.03)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#FAF7F2] border-b border-[#E8DFD3] text-[#7C6656] uppercase tracking-wider font-bold">
                <th className="py-4 px-6">이름</th>
                <th className="py-4 px-6">연락처</th>
                <th className="py-4 px-6">이메일</th>
                <th className="py-4 px-6">신청 특강 / 관심과정</th>
                <th className="py-4 px-6">신청일시</th>
                <th className="py-4 px-6">상태 (클릭 변경)</th>
                <th className="py-4 px-6">관리자 메모</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F2EAE0]">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-16 text-center text-[#8C7B6E]">
                    무료특강 신청자가 없습니다.
                  </td>
                </tr>
              ) : (
                filtered.map((item) => (
                  <tr key={item.id} className="hover:bg-[#FAF7F2]/60 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#2E2723]">
                      {item.name}
                    </td>
                    <td className="py-4 px-6 text-[#5C4C40] whitespace-nowrap">
                      {item.phone || '-'}
                    </td>
                    <td className="py-4 px-6 text-[#5C4C40]">
                      {item.email}
                    </td>
                    <td className="py-4 px-6 max-w-xs">
                      <p className="font-semibold text-[#2E2723] truncate">{item.class_title}</p>
                      {item.interest_course && (
                        <span className="text-[11px] text-[#8E6D38]">관심: {item.interest_course}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-[#7C6656] text-[11px] whitespace-nowrap">
                      {new Date(item.created_at).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-6">
                      <select
                        value={item.status}
                        onChange={(e) => handleStatusChange(item.id, e.target.value)}
                        className={`text-xs px-2.5 py-1 rounded-lg border font-bold cursor-pointer transition-colors focus:outline-none ${
                          STATUS_MAP[item.status]?.color || 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {Object.entries(STATUS_MAP).map(([key, info]) => (
                          <option key={key} value={key}>{info.label}</option>
                        ))}
                      </select>
                    </td>
                    <td className="py-4 px-6">
                      {editingMemoId === item.id ? (
                        <div className="flex items-center gap-1.5 min-w-[200px]">
                          <input
                            type="text"
                            value={memoText}
                            onChange={(e) => setMemoText(e.target.value)}
                            placeholder="메모 입력"
                            className="w-full px-2 py-1 rounded border border-[#C6A66B] text-xs focus:outline-none"
                            autoFocus
                          />
                          <button
                            onClick={() => handleSaveMemo(item.id)}
                            className="p-1 rounded bg-[#2E2723] text-white hover:bg-black"
                            title="저장"
                          >
                            <Check className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => setEditingMemoId(null)}
                            className="p-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
                            title="취소"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <div
                          onClick={() => {
                            setEditingMemoId(item.id);
                            setMemoText(item.memo || '');
                          }}
                          className="flex items-center gap-1.5 text-[#6E5A4D] hover:text-[#2E2723] cursor-pointer group py-1"
                          title="클릭하여 메모 수정"
                        >
                          <span className="text-xs truncate max-w-[150px]">
                            {item.memo || <span className="text-[#A8988B] italic">메모 추가...</span>}
                          </span>
                          <Edit2 className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#8E6D38] transition-opacity" />
                        </div>
                      )}
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
