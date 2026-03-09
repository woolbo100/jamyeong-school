export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-trueBlack/40">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-white font-bold">자명스쿨</div>
        <div className="flex gap-6 text-sm text-white/70">
          <a className="text-white/70 hover:text-[#8A6A3F] transition-colors duration-200" href="#">
            서비스 약관
          </a>
          <a className="text-white/70 hover:text-[#8A6A3F] transition-colors duration-200" href="#">
            개인정보처리방침
          </a>
        </div>
      </div>
      <div className="pb-8 text-center text-white/50 text-sm">
        © 2026 Jamyeong School. All Rights Reserved.
      </div>
    </footer>
  );
}
