import Reveal from "@/components/Reveal";

export default function TermsPage() {
  return (
    <div className="bg-trueBlack min-h-screen py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-display text-white mb-4 italic">서비스 이용약관</h1>
          <p className="text-white/50 mb-12">최종 수정일: 2026년 4월 8일</p>
        </Reveal>

        <div className="space-y-12 text-white/80 leading-relaxed font-light">
          <Reveal delayMs={100}>
            <section>
              <h2 className="text-xl font-bold text-antiqueGold mb-4">제 1 조 (목적)</h2>
              <p>
                본 약관은 자명스쿨(이하 "회사")이 제공하는 교육 서비스 및 관련 제반 서비스(이하 "서비스")의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
              </p>
            </section>
          </Reveal>

          <Reveal delayMs={200}>
            <section>
              <h2 className="text-xl font-bold text-antiqueGold mb-4">제 2 조 (용어의 정의)</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>"서비스"라 함은 회사가 웹사이트를 통해 제공하는 온라인 강의, 커뮤니티, 콘텐츠 등을 의미합니다.</li>
                <li>"이용자"라 함은 본 약관에 따라 회사가 제공하는 서비스를 이용하는 회원 및 비회원을 말합니다.</li>
              </ul>
            </section>
          </Reveal>

          <Reveal delayMs={300}>
            <section>
              <h2 className="text-xl font-bold text-antiqueGold mb-4">제 3 조 (약관의 효력 및 변경)</h2>
              <p>
                회사는 본 약관의 내용을 이용자가 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다. 회사는 필요한 경우 관계 법령을 위배하지 않는 범위 내에서 본 약관을 개정할 수 있습니다.
              </p>
            </section>
          </Reveal>

          <Reveal delayMs={400}>
            <section>
              <h2 className="text-xl font-bold text-antiqueGold mb-4">제 4 조 (서비스의 제공 및 중단)</h2>
              <p>
                회사는 이용자에게 온라인 교육 콘텐츠, 관련 정보 제공 등 회사가 정하는 서비스를 제공합니다. 서비스는 회사의 업무상 또는 기술상 지장이 없는 한 연중무휴, 1일 24시간 제공을 원칙으로 합니다.
              </p>
            </section>
          </Reveal>

          <Reveal delayMs={500}>
            <section>
              <h2 className="text-xl font-bold text-antiqueGold mb-4">제 5 조 (청약철회 및 환불)</h2>
              <p>
                유료 콘텐츠의 경우 관련 법령에 의거하여 청약철회가 가능합니다. 단, 콘텐츠의 특성상 이미 시청을 시작하거나 다운로드한 경우에는 환불이 제한될 수 있습니다. 자세한 환불 규정은 고객센터를 통해 확인하실 수 있습니다.
              </p>
            </section>
          </Reveal>

          <Reveal delayMs={600}>
            <section>
              <h2 className="text-xl font-bold text-antiqueGold mb-4">제 6 조 (저작권의 귀속)</h2>
              <p>
                회사가 작성한 저작물에 대한 저작권 및 기타 지적재산권은 회사에 귀속됩니다. 이용자는 서비스를 이용함으로써 얻은 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리 목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.
              </p>
            </section>
          </Reveal>
        </div>

        <Reveal delayMs={800}>
          <div className="mt-20 pt-8 border-t border-white/10 text-white/40 text-sm">
            궁금하신 점이나 문의사항은 <span className="text-antiqueGold">buzasun@naver.com</span>으로 연락 주시기 바랍니다.
          </div>
        </Reveal>
      </div>
    </div>
  );
}
