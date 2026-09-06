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

    const { error } = await supabase.auth.signUp({ email, password })

    if (error) {
        const errorParams = new URLSearchParams()
        errorParams.set('message', error.message)
        if (redirectUrl && redirectUrl !== '/') {
            errorParams.set('redirect', redirectUrl)
        }
        redirect(`/login?${errorParams.toString()}`)
    }

    revalidatePath('/', 'layout')
    const successParams = new URLSearchParams()
    successParams.set('message', '이메일 확인 링크를 발송했습니다. 이메일을 확인해 주세요.')
    if (redirectUrl && redirectUrl !== '/') {
        successParams.set('redirect', redirectUrl)
    }
    redirect(`/login?${successParams.toString()}`)
}
