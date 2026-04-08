import Reveal from "@/components/Reveal";

export default function PrivacyPage() {
  return (
    <div className="bg-trueBlack min-h-screen py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-display text-white mb-4 italic">개인정보처리방침</h1>
          <p className="text-white/50 mb-12">최종 수정일: 2026년 4월 8일</p>
        </Reveal>

        <div className="space-y-12 text-white/80 leading-relaxed font-light">
          <Reveal delayMs={100}>
            <section>
              <h2 className="text-xl font-bold text-antiqueGold mb-4">1. 개인정보의 수집 항목 및 방법</h2>
              <p className="mb-4">
                회사는 원활한 서비스 제공을 위해 아래와 같은 개인정보를 수집하고 있습니다.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>수집항목: 성명, 이메일 주소, 서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보 등</li>
                <li>방법: 웹사이트 회원가입, 상담 신청, 이벤트 응모, 자동 생성 정보 수집 툴</li>
              </ul>
            </section>
          </Reveal>

          <Reveal delayMs={200}>
            <section>
              <h2 className="text-xl font-bold text-antiqueGold mb-4">2. 개인정보의 이용 목적</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산</li>
                <li>회원 관리 (본인 확인, 개인 식별, 불량 회원의 부정 이용 방지 등)</li>
                <li>신규 서비스 개발 및 마케팅·광고에의 활용</li>
              </ul>
            </section>
          </Reveal>

          <Reveal delayMs={300}>
            <section>
              <h2 className="text-xl font-bold text-antiqueGold mb-4">3. 개인정보의 보유 및 이용 기간</h2>
              <p>
                회사는 원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계 법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계 법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>계약 또는 청약철회 등에 관한 기록: 5년</li>
                <li>대금결제 및 재화 등의 공급에 관한 기록: 5년</li>
                <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년</li>
              </ul>
            </section>
          </Reveal>

          <Reveal delayMs={400}>
            <section>
              <h2 className="text-xl font-bold text-antiqueGold mb-4">4. 개인정보의 파기 절차 및 방법</h2>
              <p>
                회사는 목적 달성 후 개인정보를 즉시 파기합니다. 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제하며, 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.
              </p>
            </section>
          </Reveal>

          <Reveal delayMs={500}>
            <section>
              <h2 className="text-xl font-bold text-antiqueGold mb-4">5. 이용자의 권리와 그 행사 방법</h2>
              <p>
                이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 가입 해지를 요청할 수도 있습니다. 회사는 이용자 혹은 법정 대리인의 요청에 의해 해지 또는 삭제된 개인정보는 "기타 법령에 따라 보존할 수 있는 경우"를 제외하고는 지체 없이 파기합니다.
              </p>
            </section>
          </Reveal>

          <Reveal delayMs={600}>
            <section>
              <h2 className="text-xl font-bold text-antiqueGold mb-4">6. 개인정보 보호책임자</h2>
              <p>
                서비스를 이용하시며 발생하는 모든 개인정보 보호 관련 민원은 아래의 보호책임자 혹은 담당부서로 신고하실 수 있습니다.
              </p>
              <div className="mt-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <p>성명: 백진선</p>
                <p>이메일: buzasun@naver.com</p>
              </div>
            </section>
          </Reveal>
        </div>

        <Reveal delayMs={800}>
          <div className="mt-20 pt-8 border-t border-white/10 text-white/40 text-sm">
            회사는 개인정보처리방침을 개정하는 경우 웹사이트 공지사항을 통하여 공지할 것입니다.
          </div>
        </Reveal>
      </div>
    </div>
  );
}
