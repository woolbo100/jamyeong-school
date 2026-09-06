'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
    const supabase = await createClient()

    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const rawRedirect = (formData.get('redirect') as string) || '/'
    const redirectUrl = rawRedirect.startsWith('/') ? rawRedirect : '/'

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
        const errorParams = new URLSearchParams()
        errorParams.set('message', '이메일 또는 비밀번호가 일치하지 않습니다.')
        if (redirectUrl && redirectUrl !== '/') {
            errorParams.set('redirect', redirectUrl)
        }
        redirect(`/login?${errorParams.toString()}`)
    }

    revalidatePath('/', 'layout')
    redirect(redirectUrl)
}

export async function signup(formData: FormData) {
    const supabase = await createClient()

    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const rawRedirect = (formData.get('redirect') as string) || '/'
    const redirectUrl = rawRedirect.startsWith('/') ? rawRedirect : '/'

    const { data, error } = await supabase.auth.signUp({ email, password })

    if (error) {
        const errorParams = new URLSearchParams()
        errorParams.set('message', error.message)
        if (redirectUrl && redirectUrl !== '/') {
            errorParams.set('redirect', redirectUrl)
        }
        redirect(`/login?${errorParams.toString()}`)
    }

    // 이메일 인증이 꺼져 있는 경우 즉시 로그인 처리
    if (data?.session) {
        revalidatePath('/', 'layout')
        redirect(redirectUrl)
    }

    revalidatePath('/', 'layout')
    const successParams = new URLSearchParams()
    successParams.set('message', '회원가입이 완료되었습니다. 메일함(또는 스팸메일함)의 인증 링크를 확인하시거나 로그인해 주세요.')
    if (redirectUrl && redirectUrl !== '/') {
        successParams.set('redirect', redirectUrl)
    }
    redirect(`/login?${successParams.toString()}`)
}
