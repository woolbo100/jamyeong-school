import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { LogOut, User as UserIcon, BookOpen, Calendar, ShieldCheck } from 'lucide-react'

export const metadata = {
    title: 'My Page - 자명스쿨',
}

export default async function MyPage() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    // 로그인이 안 되어 있으면 로그인 페이지로 리다이렉트
    if (!user) {
        redirect('/login')
    }

    // 유저 정보 가공
    const userName = user.user_metadata?.full_name || user.user_metadata?.name || '자명스쿨 학생'
    const userEmail = user.email
    const userAvatar = user.user_metadata?.avatar_url || null

    // 로그아웃 처리 (Server Action)
    const handleSignOut = async () => {
        'use server'
        const supabase = await createClient()
        await supabase.auth.signOut()
        redirect('/login')
    }

    return (
        <div className="min-h-screen bg-[#000000] text-white py-20 px-4 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#B89B6A]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#8A6A3F]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-[#8A6A3F]/20 pb-8">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-[#D6C6A8] tracking-tight">내 대시보드</h1>
                        <p className="text-white/60 text-sm mt-1">자명스쿨에서 나의 학습 현황을 관리합니다.</p>
                    </div>

                    <form action={handleSignOut}>
                        <button
                            type="submit"
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-[#8A6A3F]/30 hover:bg-white/10 hover:border-[#D6C6A8]/50 transition-all duration-200 text-sm text-[#D6C6A8] font-semibold cursor-pointer"
                        >
                            <LogOut className="w-4 h-4" />
                            로그아웃
                        </button>
                    </form>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* User Profile Card */}
                    <div className="md:col-span-1 bg-[#0B0B10] border border-[#8A6A3F]/30 rounded-2xl p-6 flex flex-col items-center text-center shadow-xl">
                        <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-[#B89B6A] bg-black/40 flex items-center justify-center">
                            {userAvatar ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    src={userAvatar}
                                    alt={userName}
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                />
                            ) : (
                                <UserIcon className="w-12 h-12 text-[#D6C6A8]/60" />
                            )}
                        </div>

                        <h2 className="text-xl font-bold text-[#D6C6A8] mb-1">{userName}</h2>
                        <p className="text-xs text-white/40 mb-6">{userEmail}</p>

                        <div className="w-full pt-4 border-t border-[#8A6A3F]/20 flex flex-col gap-3">
                            <div className="flex items-center justify-between text-xs text-white/60">
                                <span>가입 계정</span>
                                <span className="font-semibold text-white/90 capitalize">
                                    {user.app_metadata.provider || 'Email'}
                                </span>
                            </div>
                            <div className="flex items-center justify-between text-xs text-white/60">
                                <span>인증 상태</span>
                                <span className="flex items-center gap-1 font-semibold text-emerald-400">
                                    <ShieldCheck className="w-3.5 h-3.5" />
                                    인증 완료
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Learning Status / Dashboard Cards */}
                    <div className="md:col-span-2 space-y-6">
                        {/* Course Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#0B0B10] border border-[#8A6A3F]/20 rounded-2xl p-5 shadow-lg">
                                <div className="flex items-center gap-3 text-[#D6C6A8] mb-2">
                                    <BookOpen className="w-5 h-5" />
                                    <span className="text-sm font-semibold">수강 중인 강의</span>
                                </div>
                                <p className="text-3xl font-extrabold text-white">0<span className="text-lg font-normal text-white/50 ml-1">개</span></p>
                            </div>

                            <div className="bg-[#0B0B10] border border-[#8A6A3F]/20 rounded-2xl p-5 shadow-lg">
                                <div className="flex items-center gap-3 text-[#D6C6A8] mb-2">
                                    <Calendar className="w-5 h-5" />
                                    <span className="text-sm font-semibold">마지막 학습일</span>
                                </div>
                                <p className="text-lg font-bold text-white/80">오늘</p>
                            </div>
                        </div>

                        {/* Welcome Announcement Card */}
                        <div className="bg-gradient-to-br from-[#0B0B10] to-[#12121A] border border-[#8A6A3F]/30 rounded-2xl p-6 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#B89B6A]/10 to-transparent rounded-full blur-2xl pointer-events-none" />
                            <h3 className="text-lg font-bold text-[#D6C6A8] mb-2">🎉 자명스쿨에 오신 것을 환영합니다!</h3>
                            <p className="text-sm text-white/70 leading-relaxed">
                                소셜 로그인을 통해 성공적으로 접속하셨습니다. 현재 마이페이지 시스템을 준비 중입니다. 
                                곧 맞춤형 학습 대시보드와 진도 관리 기능이 오픈될 예정이니 많은 기대 부탁드립니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
