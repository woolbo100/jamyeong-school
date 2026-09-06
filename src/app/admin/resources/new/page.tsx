'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Upload, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

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

export default function NewResourcePage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // 폼 상태
  const [resourceCode, setResourceCode] = useState('');
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('기타');
  const [tags, setTags] = useState('');
  const [status, setStatus] = useState('draft');
  const [visibility, setVisibility] = useState('member');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [relatedCourseUrl, setRelatedCourseUrl] = useState('');
  const [relatedCourseTitle, setRelatedCourseTitle] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);
  const [sortOrder, setSortOrder] = useState('0');

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedThumbnail, setSelectedThumbnail] = useState<File | null>(null);

  // 제목 입력 시 슬러그 자동 추천
  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!slug) {
      const generatedSlug = val
        .toLowerCase()
        .replace(/[^a-z0-9가-힣\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
      setSlug(generatedSlug);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!resourceCode.trim() || !title.trim() || !slug.trim()) {
      setErrorMsg('자료 코드, 제목, 슬러그는 필수 입력값입니다.');
      return;
    }

    if (!selectedFile) {
      setErrorMsg('업로드할 자료 파일을 선택해 주세요.');
      return;
    }

    try {
      setIsSubmitting(true);
      const formData = new FormData();
      formData.append('resource_code', resourceCode);
      formData.append('title', title);
      formData.append('slug', slug);
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
      formData.append('file', selectedFile);

      if (selectedThumbnail) {
        formData.append('thumbnail', selectedThumbnail);
      }

      const res = await fetch('/api/admin/resources', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || '자료 등록에 실패했습니다.');
        return;
      }

      alert('자료가 성공적으로 등록되었습니다!');
      router.push('/admin/resources');
    } catch (err: any) {
      console.error(err);
      setErrorMsg('네트워크 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#2E2723] p-6 md:p-10 selection:bg-[#C6A66B]/20">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* 상단 네비게이션 */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E8DFD3]">
          <Link
            href="/admin/resources"
            className="text-xs font-bold text-[#6E5A4D] hover:text-[#2E2723] flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>자료 목록으로 돌아가기</span>
          </Link>
          <span className="text-xs font-bold text-[#8E6D38]">신규 자료 등록</span>
        </div>

        {/* 메인 폼 카드 */}
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-[#E8DFD3] p-8 md:p-10 shadow-[0_4px_25px_rgba(46,39,35,0.04)] space-y-8">
          <div>
            <h1 className="text-2xl font-extrabold text-[#2E2723] mb-1">새 교육자료 등록</h1>
            <p className="text-xs text-[#7C6656]">유튜브 및 강의와 연계할 자료 정보를 입력하고 파일을 업로드하세요.</p>
          </div>

          {errorMsg && (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* 1. 기본 식별 정보 */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-[#8E6D38] uppercase tracking-wider pb-2 border-b border-[#F2EAE0]">
              1. 기본 식별 정보
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#2E2723] mb-1.5">
                  자료 코드 <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={resourceCode}
                  onChange={(e) => setResourceCode(e.target.value.toUpperCase())}
                  placeholder="예: YT-001"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8DFD3] bg-[#FDFCF9] text-xs font-mono font-bold focus:outline-none focus:ring-2 focus:ring-[#C6A66B]"
                />
                <span className="text-[11px] text-[#8C7B6E] mt-1 block">유튜브 안내 시 활용할 고유 코드입니다.</span>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2E2723] mb-1.5">
                  URL 슬러그 (Slug) <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="예: ebook-checklist"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8DFD3] bg-[#FDFCF9] text-xs font-mono focus:outline-none focus:ring-2 focus:ring-[#C6A66B]"
                />
                <span className="text-[11px] text-[#8C7B6E] mt-1 block">/resources/[slug] 경로에 사용됩니다.</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#2E2723] mb-1.5">
                자료 제목 <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="예: 전자책 기획 & 목차 완성 실전 체크리스트"
                className="w-full px-4 py-2.5 rounded-xl border border-[#E8DFD3] bg-[#FDFCF9] text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#C6A66B]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#2E2723] mb-1.5">자료 설명</label>
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="자료에 대한 간략한 핵심 소개 문구를 입력하세요."
                className="w-full px-4 py-2.5 rounded-xl border border-[#E8DFD3] bg-[#FDFCF9] text-xs leading-relaxed focus:outline-none focus:ring-2 focus:ring-[#C6A66B]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#2E2723] mb-1.5">카테고리</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8DFD3] bg-[#FDFCF9] text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#C6A66B]"
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
                  placeholder="예: 전자책, 감성출판, 기획, AI"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8DFD3] bg-[#FDFCF9] text-xs focus:outline-none focus:ring-2 focus:ring-[#C6A66B]"
                />
              </div>
            </div>
          </div>

          {/* 2. 파일 업로드 */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-[#8E6D38] uppercase tracking-wider pb-2 border-b border-[#F2EAE0]">
              2. 자료 파일 및 썸네일 업로드
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 자료 파일 */}
              <div className="p-5 rounded-2xl border-2 border-dashed border-[#D6C6A8] bg-[#FAF7F2] text-center space-y-2">
                <Upload className="w-6 h-6 text-[#8E6D38] mx-auto" />
                <label className="block text-xs font-bold text-[#2E2723] cursor-pointer">
                  자료 파일 선택 (필수)
                  <input
                    type="file"
                    required
                    onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                    className="hidden"
                  />
                </label>
                <p className="text-[11px] text-[#7C6656]">
                  {selectedFile ? (
                    <span className="font-bold text-[#2E2723]">{selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)</span>
                  ) : (
                    'PDF, DOCX, PPTX, XLSX, ZIP 등 (최대 50MB)'
                  )}
                </p>
              </div>

              {/* 썸네일 이미지 */}
              <div className="p-5 rounded-2xl border-2 border-dashed border-[#D6C6A8] bg-[#FAF7F2] text-center space-y-2">
                <FileText className="w-6 h-6 text-[#8E6D38] mx-auto" />
                <label className="block text-xs font-bold text-[#2E2723] cursor-pointer">
                  썸네일 이미지 선택 (선택)
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setSelectedThumbnail(e.target.files?.[0] || null)}
                    className="hidden"
                  />
                </label>
                <p className="text-[11px] text-[#7C6656]">
                  {selectedThumbnail ? (
                    <span className="font-bold text-[#2E2723]">{selectedThumbnail.name}</span>
                  ) : (
                    '16:9 또는 4:3 비율의 이미지 (PNG, JPG, WEBP)'
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* 3. 공개 상태 및 권한 */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-[#8E6D38] uppercase tracking-wider pb-2 border-b border-[#F2EAE0]">
              3. 상태 및 권한 설정
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#2E2723] mb-1.5">게시 상태</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8DFD3] bg-[#FDFCF9] text-xs font-semibold"
                >
                  <option value="draft">작성중 (draft - 비공개)</option>
                  <option value="published">공개 (published - 즉시 노출)</option>
                  <option value="hidden">숨김 (hidden - URL 직접 접근만)</option>
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
                  <option value="member">회원 전용 (member - 기본 권장)</option>
                  <option value="public">전체 공개 (public - 비회원 가능)</option>
                  <option value="student">수강생 전용 (student - 준비중)</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                id="isFeatured"
                checked={isFeatured}
                onChange={(e) => setIsFeatured(e.target.checked)}
                className="w-4 h-4 rounded text-[#C6A66B] focus:ring-[#C6A66B]"
              />
              <label htmlFor="isFeatured" className="text-xs font-bold text-[#2E2723] cursor-pointer">
                자료실 상단 [이달의 추천 자료(Featured)]로 강조 표시
              </label>
            </div>
          </div>

          {/* 4. 외부 콘텐츠 연계 */}
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
                placeholder="예: https://www.youtube.com/watch?v=..."
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
                  placeholder="예: 감성출판지도사 과정"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8DFD3] bg-[#FDFCF9] text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2E2723] mb-1.5">관련 강의 링크</label>
                <input
                  type="text"
                  value={relatedCourseUrl}
                  onChange={(e) => setRelatedCourseUrl(e.target.value)}
                  placeholder="예: /courses/earth 또는 /apply"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8DFD3] bg-[#FDFCF9] text-xs"
                />
              </div>
            </div>
          </div>

          {/* 제출 버튼 */}
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
              {isSubmitting ? '파일 업로드 및 저장 중...' : '자료 등록 완료'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
