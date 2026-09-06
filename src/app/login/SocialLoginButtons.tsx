'use client'

import { createClient } from '@/utils/supabase/client'

interface Props {
    redirectUrl?: string
}

export default function SocialLoginButtons({ redirectUrl = '/mypage' }: Props) {
    const supabase = createClient()

    const handleLogin = async (provider: 'kakao' | 'google') => {
        const nextTarget = encodeURIComponent(redirectUrl)
        await supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: `${window.location.origin}/auth/callback?next=${nextTarget}`,
            },
        })
    }

    return (
        <div className="mt-6 space-y-3">
            <div className="flex items-center my-4">
                <div className="flex-grow border-t border-[#8A6A3F]/20"></div>
                <span className="px-3 text-xs text-white/40 font-medium">또는 소셜 계정으로 로그인</span>
                <div className="flex-grow border-t border-[#8A6A3F]/20"></div>
            </div>

            {/* Kakao Button */}
            <button
                type="button"
                onClick={() => handleLogin('kakao')}
                className="w-full h-12 flex items-center justify-center gap-3 bg-[#FEE500] text-[#191919] font-bold rounded-xl hover:bg-[#FEE500]/90 transition-all duration-200 cursor-pointer shadow-md"
            >
                {/* Kakao Icon (SVG) */}
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.557 1.707 4.8 4.27 5.99-.273.965-.988 3.486-1.137 4.024-.236.852.29.84.607.63 2.483-1.644 3.435-2.293 4.82-3.238.147.018.295.03.44.03 4.97 0 9-3.186 9-7.116C21 6.185 16.97 3 12 3z" />
                </svg>
                카카오 로그인
            </button>

            {/* Google Button */}
            <button
                type="button"
                onClick={() => handleLogin('google')}
                className="w-full h-12 flex items-center justify-center gap-3 bg-white text-[#1f2937] font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 cursor-pointer shadow-md border border-gray-200"
            >
                {/* Google Icon (SVG) */}
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                    <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                </svg>
                Google 로그인
            </button>
        </div>
    )
}
