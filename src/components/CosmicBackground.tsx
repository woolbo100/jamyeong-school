export default function CosmicBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1]">
      {/* True Black 바탕 */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: '#000000' }}
      />

      {/* Nebula layer - 성운 */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(900px circle at 15% 20%, rgba(184,155,106,0.06), transparent 55%),
            radial-gradient(700px circle at 80% 30%, rgba(120,90,180,0.06), transparent 60%),
            radial-gradient(650px circle at 40% 80%, rgba(60,140,160,0.04), transparent 60%)
          `,
        }}
      />

      {/* Star dust layer - 별점 */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px),
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px),
            repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(255,255,255,0.02) 3px, rgba(255,255,255,0.02) 6px)
          `,
          backgroundSize: '200px 200px, 200px 200px, 300px 300px',
          opacity: 0.4,
        }}
      />

      {/* Noise layer - 미세 노이즈 */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* 텍스트 가독성 오버레이 - 경계선을 없애기 위해 투명도 조정 */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 30%, transparent 0%, rgba(0,0,0,0.4) 50%, #000000 100%)',
        }}
      />
    </div>
  );
}
