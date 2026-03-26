'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/lib/language'
import { useAuth } from '@/lib/auth'
import { translations } from '@/lib/translations'

export default function AuthForm({ mode }: { mode: 'signin' | 'signup' }) {
  const { language } = useLanguage()
  const { signIn, signUp } = useAuth()
  const router = useRouter()
  const t = translations[language]

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [forgotMsg, setForgotMsg] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (mode === 'signup') {
      if (password.length < 8) {
        setError(t.auth.passwordMinLength)
        return
      }
      if (password !== confirmPassword) {
        setError(t.auth.passwordsNoMatch)
        return
      }
      const ok = signUp(name, email, password)
      if (ok) {
        router.push('/account')
      } else {
        setError(t.auth.invalidEmail)
      }
    } else {
      const ok = signIn(email, password)
      if (ok) {
        router.push('/account')
      } else {
        setError(t.auth.signInError)
      }
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">
        {mode === 'signin' ? t.auth.logIn : t.auth.signUp}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        {mode === 'signup' && (
          <div>
            <label className="block text-sm text-text-secondary mb-1">{t.auth.name}</label>
            <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-accent" />
          </div>
        )}

        <div>
          <label className="block text-sm text-text-secondary mb-1">{t.auth.email}</label>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-accent" />
        </div>

        <div>
          <label className="block text-sm text-text-secondary mb-1">{t.auth.password}</label>
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-accent" />
        </div>

        {mode === 'signup' && (
          <div>
            <label className="block text-sm text-text-secondary mb-1">{t.auth.confirmPassword}</label>
            <input type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-accent" />
          </div>
        )}

        {mode === 'signin' && (
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-text-secondary">
              <input type="checkbox" className="rounded" />
              {t.auth.rememberMe}
            </label>
            <button type="button" onClick={() => setForgotMsg(true)} className="text-sm text-accent hover:underline">
              {t.auth.forgotPassword}
            </button>
          </div>
        )}

        {forgotMsg && (
          <p className="text-sm text-text-secondary bg-surface-elevated p-3 rounded-lg">
            {t.auth.contactSupport.replace('{email}', 'contact@blitzone.com')}
          </p>
        )}

        {error && (
          <p className="text-sm text-accent bg-accent/10 p-3 rounded-lg">{error}</p>
        )}

        <button type="submit" className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-3 rounded-xl transition-colors">
          {mode === 'signin' ? t.auth.logIn : t.auth.signUp}
        </button>
      </form>

      <p className="text-center text-sm text-text-secondary mt-6">
        {mode === 'signin' ? t.auth.noAccount : t.auth.hasAccount}{' '}
        <Link href={mode === 'signin' ? '/account/signup' : '/account/signin'} className="text-accent hover:underline">
          {mode === 'signin' ? t.auth.signUp : t.auth.logIn}
        </Link>
      </p>
    </div>
  )
}
