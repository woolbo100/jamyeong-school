import { login, signup } from './actions'
import SocialLoginButtons from './SocialLoginButtons'

export const metadata = {
    title: '로그인 - 자명스쿨',
}

export default async function LoginPage(props: {
    searchParams: Promise<{ message?: string; redirect?: string }>
}) {
    const searchParams = await props.searchParams;
    const message = searchParams.message;
    const redirectUrl = searchParams.redirect || '/';
    const isFromResources = redirectUrl.startsWith('/resources');

    return (
        <div className="min-h-screen bg-[#000000] flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-[#0B0B10] border border-[#8A6A3F]/30 p-8 rounded-2xl shadow-xl relative overflow-hidden">
                {/* Subtle Glow Effect */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'radial-gradient(400px circle at 50% 0%, rgba(184,155,106,0.15), transparent 70%)',
                    }}
                />

                <div className="text-center mb-8 relative z-10">
                    <h1 className="text-3xl font-bold text-[#D6C6A8] mb-2 tracking-tight">Welcome</h1>
                    <p className="text-white/60 text-sm">Sign in or create an account</p>
                </div>

                {/* 자료실에서 유입된 비회원 전용 안내 배너 */}
                {isFromResources && (
                    <div className="mb-6 p-4 rounded-xl bg-[#B89B6A]/10 border border-[#B89B6A]/30 text-center relative z-10">
                        <p className="text-xs font-bold text-[#D6C6A8] mb-1">🎁 자명자료실 회원 혜택</p>
                        <p className="text-xs text-white/80 leading-relaxed break-keep">
                            자명스쿨 회원은 자료실의 실전 교육자료를 무료로 다운로드하실 수 있습니다. 로그인 후 해당 자료로 자동 복귀합니다.
                        </p>
                    </div>
                )}

                <form className="space-y-4 flex flex-col relative z-10">
                    {/* redirect URL 유지를 위한 hidden input */}
                    <input type="hidden" name="redirect" value={redirectUrl} />

                    <div>
                        <label className="block text-sm font-medium text-white/80 mb-1" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full px-4 py-3 bg-black/50 border border-[#8A6A3F]/50 rounded-xl text-white focus:outline-none focus:border-[#D6C6A8] transition-colors focus:ring-1 focus:ring-[#D6C6A8]/50 placeholder-white/20"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white/80 mb-1" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full px-4 py-3 bg-black/50 border border-[#8A6A3F]/50 rounded-xl text-white focus:outline-none focus:border-[#D6C6A8] transition-colors focus:ring-1 focus:ring-[#D6C6A8]/50 placeholder-white/20"
                            id="password"
                            name="password"
                            type="password"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {message && (
                        <div className="text-center text-sm mt-4 p-4 bg-black/40 text-[#D6C6A8] border border-[#8A6A3F]/30 rounded-xl break-keep">
                            {message}
                        </div>
                    )}

                    <div className="pt-6 flex flex-col gap-3">
                        <button
                            formAction={login}
                            className="group relative overflow-visible w-full rounded-xl h-12 flex items-center justify-center text-base font-bold bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] text-[#0B0B10] shadow transition-all duration-300 ease-out transform-gpu hover:-translate-y-[1px]"
                        >
                            {/* External Aura Glow */}
                            <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-1 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-lg"
                                style={{ background: 'radial-gradient(1200px 120px at 50% 50%, rgba(184,155,106,0.38), transparent 55%)' }}
                            />
                            {/* Sharp Ring Highlight */}
                            <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-[1px] rounded-[inherit] opacity-0 transition-all duration-300 group-hover:opacity-100 ring-1 ring-[#8A6A3F]/45"
                            />
                            <span className="relative z-10">Sign In</span>
                        </button>
                        <button
                            formAction={signup}
                            className="w-full py-3 bg-transparent border border-[#8A6A3F]/50 text-[#D6C6A8] font-bold rounded-xl hover:bg-[#8A6A3F]/10 transition-colors"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
                
                <SocialLoginButtons redirectUrl={redirectUrl} />
            </div>
        </div>
    )
}
