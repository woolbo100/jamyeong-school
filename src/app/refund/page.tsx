import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "환불 정책 | 자명스쿨",
  description: "자명스쿨의 강의, 자격과정, 디지털 콘텐츠 및 원데이클래스 환불 및 취소 규정 안내입니다.",
};

export default function RefundPage() {
  return (
    <div className="bg-trueBlack min-h-screen py-32 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <span className="text-xs font-bold tracking-[0.2em] text-[#B89B6A] uppercase mb-3 block">
            Refund Policy
          </span>
          <h1 className="text-4xl md:text-5xl font-display text-white mb-4 italic">
            환불 및 취소 정책
          </h1>
          <p className="text-white/50 mb-12 text-sm">
            최종 수정일: 2026년 4월 8일
          </p>
        </Reveal>

        <div className="space-y-12 text-white/80 leading-relaxed font-light">
          {/* 제 1 조 총칙 */}
          <Reveal delayMs={100}>
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-antiqueGold">
                제 1 조 (목적 및 총칙)
              </h2>
              <p>
                본 정책은 자명스쿨(이하 &quot;회사&quot;)이 제공하는 온라인 강의, 실시간 라이브 교육, 자격과정, 원데이클래스 및 디지털 콘텐츠의 청약철회, 취소 및 환불 기준과 절차를 규정함을 목적으로 합니다. 회사는 「전자상거래 등에서의 소비자보호에 관한 법률」 및 「평생교육법 시행령」 등 관계 법령을 준수합니다.
              </p>
            </section>
          </Reveal>

          {/* 제 2 조 VOD 온라인 강의 환불 기준 */}
          <Reveal delayMs={200}>
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-antiqueGold">
                제 2 조 (온라인 정규 강의 및 VOD 콘텐츠)
              </h2>
              <p>
                수강 시작 전이거나 콘텐츠를 시청하지 않은 경우 결제일로부터 7일 이내에 청약철회가 가능합니다.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-white/70 text-sm">
                <li>
                  <strong className="text-white">결제 후 7일 이내 & 강의 미시청:</strong> 결제 금액 전액 환불
                </li>
                <li>
                  <strong className="text-white">결제 후 7일 이내이나 일부 시청:</strong> 결제 금액에서 시청한 차시(수강 회차) 정산 금액 및 결제수수료를 공제 후 부분 환불
                </li>
                <li>
                  <strong className="text-white">결제 후 7일 초과 또는 총 수강 기간의 1/2 경과:</strong> 환불 불가
                </li>
                <li>
                  제공된 강의자료(PDF, 템플릿 등)를 다운로드한 경우 해당 디지털 자료에 상당하는 금액이 공제될 수 있습니다.
                </li>
              </ul>
            </section>
          </Reveal>

          {/* 제 3 조 실시간 라이브 / 원데이클래스 환불 기준 */}
          <Reveal delayMs={300}>
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-antiqueGold">
                제 3 조 (실시간 라이브 코칭 및 원데이클래스)
              </h2>
              <p>
                실시간 줌(Zoom) 또는 오프라인으로 진행되는 원데이클래스 및 소그룹 코칭의 환불 기준은 다음과 같습니다.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-white/70 text-sm">
                <li>
                  <strong className="text-white">수업 시작 3일 전까지:</strong> 결제 금액 100% 전액 환불
                </li>
                <li>
                  <strong className="text-white">수업 시작 2일 전 ~ 1일 전까지:</strong> 결제 금액의 80% 환불
                </li>
                <li>
                  <strong className="text-white">수업 당일 시작 전까지:</strong> 결제 금액의 50% 환불
                </li>
                <li>
                  <strong className="text-white">수업 시작 이후:</strong> 환불 불가 (녹화본 또는 보충 자료 제공으로 갈음할 수 있음)
                </li>
              </ul>
            </section>
          </Reveal>

          {/* 제 4 조 디지털 전자책 및 다운로드 콘텐츠 */}
          <Reveal delayMs={400}>
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-antiqueGold">
                제 4 조 (디지털 전자책 및 다운로드 파일)
              </h2>
              <p>
                전자책(PDF), 프롬프트 템플릿, 그래픽 소스 등 디지털 파일 형태로 제공되는 상품은 복제가 가능한 특성상 다운로드(또는 열람 링크 발송) 완료 시 「전자상거래법」 제17조 제2항에 따라 청약철회가 제한됩니다.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-white/70 text-sm">
                <li>
                  <strong className="text-white">파일 다운로드 전 / 발송 전:</strong> 결제일로부터 7일 이내 전액 환불 가능
                </li>
                <li>
                  <strong className="text-white">파일 다운로드 후 / 이메일 발송 완료 후:</strong> 제품의 중대한 하자가 있는 경우를 제외하고 환불 불가
                </li>
              </ul>
            </section>
          </Reveal>

          {/* 제 5 조 자격과정 및 민간자격 검정료 */}
          <Reveal delayMs={500}>
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-antiqueGold">
                제 5 조 (한국디지털마인드코칭협회 자격과정 및 응시료)
              </h2>
              <p>
                한국디지털마인드코칭협회(KDMCA) 공인 민간자격 과정 및 검정 응시료의 환불 규정은 협회 관리 규정을 따릅니다.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-white/70 text-sm">
                <li>
                  <strong className="text-white">자격 심사 전 취소 요청:</strong> 심사 접수 마감일 전까지 전액 환불
                </li>
                <li>
                  <strong className="text-white">자격 심사 착수 및 자격증 발급 이후:</strong> 발급 비용 및 응시료 환불 불가
                </li>
              </ul>
            </section>
          </Reveal>

          {/* 제 6 조 환불 신청 방법 및 처리 절차 */}
          <Reveal delayMs={600}>
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-antiqueGold">
                제 6 조 (환불 신청 방법 및 처리 기간)
              </h2>
              <p>
                환불 신청은 고객센터(카카오톡 채널 또는 이메일)를 통해 접수해주시면 담당자가 접수 순서에 따라 신속히 처리해 드립니다.
              </p>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-sm">
                <p><strong className="text-[#B89B6A]">카카오톡 상담:</strong> 카카오톡 채널 &apos;자명스쿨&apos; 1:1 채팅 문의</p>
                <p><strong className="text-[#B89B6A]">이메일 접수:</strong> buzasun@naver.com (주문자명, 연락처, 결제수단 기재)</p>
                <p><strong className="text-[#B89B6A]">환불 처리 기간:</strong> 승인 후 영업일 기준 신용카드 3~5일, 계좌이체/무통장입금 2~3일 소요</p>
              </div>
            </section>
          </Reveal>
        </div>

        {/* 하단 문의 안내 */}
        <Reveal delayMs={700}>
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-white/50">
            <p>환불 관련 추가 문의사항은 고객센터로 연락 주시기 바랍니다.</p>
            <div className="flex gap-4">
              <a
                href="https://pf.kakao.com/_IxguMn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-antiqueGold hover:underline font-medium"
              >
                카카오톡 문의하기 →
              </a>
              <Link href="/contact" className="hover:text-white transition-colors">
                문의 페이지
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

