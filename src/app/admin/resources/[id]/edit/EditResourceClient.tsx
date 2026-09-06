'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Upload, FileText, AlertCircle } from 'lucide-react';
import type { ResourceItem } from '@/app/resources/ResourcesClient';

const CATEGORIES = [
  'AI',
  '브랜딩',
  '캔바',
  '출판',
  '마인드',
  'AI아트',
  '강의자료',
  '기타',
];

interface Props {
  initialData: ResourceItem;
}

export default function EditResourceClient({ initialData }: Props) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [title, setTitle] = useState(initialData.title || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [category, setCategory] = useState(initialData.category || '기타');
  const [tags, setTags] = useState((initialData.tags || []).join(', '));
  const [status, setStatus] = useState(initialData.status || 'draft');
  const [visibility, setVisibility] = useState(initialData.visibility || 'member');
  const [youtubeUrl, setYoutubeUrl] = useState(initialData.youtube_url || '');
  const [relatedCourseUrl, setRelatedCourseUrl] = useState(initialData.related_course_url || '');
  const [relatedCourseTitle, setRelatedCourseTitle] = useState(initialData.related_course_title || '');
  const [isFeatured, setIsFeatured] = useState(Boolean(initialData.is_featured));
  const [sortOrder, setSortOrder] = useState(String(initialData.sort_order || 0));

  const [newFile, setNewFile] = useState<File | null>(null);
  const [newThumbnail, setNewThumbnail] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!title.trim()) {
      setErrorMsg('자료 제목은 필수 입력값입니다.');
      return;
    }

    try {
      setIsSubmitting(true);
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('category', category);
      formData.append('tags', tags);
      formData.append('status', status);
      formData.append('visibility', visibility);
      formData.append('youtube_url', youtubeUrl);
      formData.append('related_course_url', relatedCourseUrl);
      formData.append('related_course_title', relatedCourseTitle);
      formData.append('is_featured', isFeatured ? 'true' : 'false');
      formData.append('sort_order', sortOrder);

      if (newFile) {
        formData.append('file', newFile);
      }
      if (newThumbnail) {
        formData.append('thumbnail', newThumbnail);
      }

      const res = await fetch(`/api/admin/resources/${initialData.id}`, {
        method: 'PATCH',
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || '자료 수정에 실패했습니다.');
        return;
      }

      alert('자료 정보가 성공적으로 수정되었습니다!');
      router.push('/admin/resources');
    } catch (err) {
      console.error(err);
      setErrorMsg('수정 처리 중 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#2E2723] p-6 md:p-10 selection:bg-[#C6A66B]/20">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between pb-4 border-b border-[#E8DFD3]">
          <Link
            href="/admin/resources"
            className="text-xs font-bold text-[#6E5A4D] hover:text-[#2E2723] flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>자료 목록으로 돌아가기</span>
          </Link>
          <span className="text-xs font-bold text-[#8E6D38]">자료 수정 ({initialData.resource_code})</span>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-[#E8DFD3] p-8 md:p-10 shadow-sm space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold text-[#8E6D38] px-2.5 py-1 rounded bg-[#F7F2EB]">
                {initialData.resource_code}
              </span>
              <h1 className="text-2xl font-extrabold text-[#2E2723]">자료 정보 수정</h1>
            </div>
            <p className="text-xs text-[#7C6656]">등록된 자료의 메타데이터를 변경하거나 파일을 교체할 수 있습니다.</p>
          </div>

          {errorMsg && (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* 1. 기본 정보 */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-[#8E6D38] uppercase tracking-wider pb-2 border-b border-[#F2EAE0]">
              1. 기본 정보
            </h2>

            <div>
              <label className="block text-xs font-bold text-[#2E2723] mb-1.5">자료 제목</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#E8DFD3] bg-[#FDFCF9] text-sm font-semibold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#2E2723] mb-1.5">자료 설명</label>
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#E8DFD3] bg-[#FDFCF9] text-xs leading-relaxed"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#2E2723] mb-1.5">카테고리</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8DFD3] bg-[#FDFCF9] text-xs font-semibold"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2E2723] mb-1.5">태그 (쉼표 구분)</label>
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8DFD3] bg-[#FDFCF9] text-xs"
                />
              </div>
            </div>
          </div>

          {/* 2. 파일 교체 */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-[#8E6D38] uppercase tracking-wider pb-2 border-b border-[#F2EAE0]">
              2. 파일 교체 (선택)
            </h2>

            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFD3] text-xs text-[#6E5A4D] space-y-1">
              <p>현재 등록된 파일: <strong className="text-[#2E2723]">{initialData.file_name || initialData.file_path}</strong></p>
              <p className="text-[11px] text-[#8C7B6E]">새 파일을 선택할 경우 기존 파일이 안전하게 대체됩니다.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border-2 border-dashed border-[#D6C6A8] bg-[#FAF7F2] text-center space-y-2">
                <Upload className="w-5 h-5 text-[#8E6D38] mx-auto" />
                <label className="block text-xs font-bold text-[#2E2723] cursor-pointer">
                  새 자료 파일 선택
                  <input
                    type="file"
                    onChange={(e) => setNewFile(e.target.files?.[0] || null)}
                    className="hidden"
                  />
                </label>
                <p className="text-[11px] text-[#7C6656]">
                  {newFile ? newFile.name : '변경할 때만 선택 (최대 50MB)'}
                </p>
              </div>

              <div className="p-5 rounded-2xl border-2 border-dashed border-[#D6C6A8] bg-[#FAF7F2] text-center space-y-2">
                <FileText className="w-5 h-5 text-[#8E6D38] mx-auto" />
                <label className="block text-xs font-bold text-[#2E2723] cursor-pointer">
                  새 썸네일 이미지 선택
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setNewThumbnail(e.target.files?.[0] || null)}
                    className="hidden"
                  />
                </label>
                <p className="text-[11px] text-[#7C6656]">
                  {newThumbnail ? newThumbnail.name : '변경할 때만 선택'}
                </p>
              </div>
            </div>
          </div>

          {/* 3. 상태 및 공개범위 */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-[#8E6D38] uppercase tracking-wider pb-2 border-b border-[#F2EAE0]">
              3. 상태 및 권한
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#2E2723] mb-1.5">게시 상태</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8DFD3] bg-[#FDFCF9] text-xs font-semibold"
                >
                  <option value="draft">작성중 (draft)</option>
                  <option value="published">공개 (published)</option>
                  <option value="hidden">숨김 (hidden)</option>
                  <option value="archived">보관 (archived)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2E2723] mb-1.5">다운로드 공개범위</label>
                <select
                  value={visibility}
                  onChange={(e) => setVisibility(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8DFD3] bg-[#FDFCF9] text-xs font-semibold"
                >
                  <option value="member">회원 전용 (member)</option>
                  <option value="public">전체 공개 (public)</option>
                  <option value="student">수강생 전용 (student)</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                id="editIsFeatured"
                checked={isFeatured}
                onChange={(e) => setIsFeatured(e.target.checked)}
                className="w-4 h-4 rounded text-[#C6A66B]"
              />
              <label htmlFor="editIsFeatured" className="text-xs font-bold text-[#2E2723] cursor-pointer">
                자료실 상단 [이달의 추천 자료(Featured)]로 강조 표시
              </label>
            </div>
          </div>

          {/* 4. 유튜브 및 강의 링크 */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-[#8E6D38] uppercase tracking-wider pb-2 border-b border-[#F2EAE0]">
              4. 유튜브 및 강의 연계
            </h2>

            <div>
              <label className="block text-xs font-bold text-[#2E2723] mb-1.5">관련 유튜브 영상 링크</label>
              <input
                type="url"
                value={youtubeUrl}
                onChange={(e) => setYoutubeUrl(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#E8DFD3] bg-[#FDFCF9] text-xs"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#2E2723] mb-1.5">관련 강의명</label>
                <input
                  type="text"
                  value={relatedCourseTitle}
                  onChange={(e) => setRelatedCourseTitle(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8DFD3] bg-[#FDFCF9] text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2E2723] mb-1.5">관련 강의 링크</label>
                <input
                  type="text"
                  value={relatedCourseUrl}
                  onChange={(e) => setRelatedCourseUrl(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8DFD3] bg-[#FDFCF9] text-xs"
                />
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#E8DFD3] flex items-center justify-end gap-3">
            <Link
              href="/admin/resources"
              className="px-5 py-2.5 rounded-xl border border-[#D6C6A8] text-xs font-bold text-[#6E5A4D] hover:bg-[#F7F2EB]"
            >
              취소
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 rounded-xl bg-[#2E2723] hover:bg-[#1E1815] text-[#FFFBD1] text-xs font-bold shadow-md transition-all disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? '저장 중...' : '변경사항 저장'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
