'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/lib/language'
import { useAuth } from '@/lib/auth'
import { translations } from '@/lib/translations'

export default function AccountPage() {
  const { language } = useLanguage()
  const { user, isSignedIn, signOut } = useAuth()
  const router = useRouter()
  const t = translations[language]

  const [editing, setEditing] = useState(false)
  const [editName, setEditName] = useState('')

  useEffect(() => {
    if (!isSignedIn) router.push('/account/signin')
  }, [isSignedIn, router])

  useEffect(() => {
    if (user) setEditName(user.name)
  }, [user])

  if (!isSignedIn || !user) return null

  const welcome = t.auth.welcome.replace('{name}', user.name)

  return (
    <div className="pt-24 pb-16 max-w-2xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">{welcome}</h1>

      <div className="bg-surface border border-border rounded-xl p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">{t.auth.myOrders}</h2>
        <p className="text-text-muted text-sm">{t.auth.noOrders}</p>
      </div>

      <div className="bg-surface border border-border rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">{t.auth.profile}</h2>
          <button onClick={() => setEditing(!editing)} className="text-sm text-accent hover:underline">
            {t.auth.editProfile}
          </button>
        </div>
        {editing ? (
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-text-secondary mb-1">{t.auth.name}</label>
              <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} className="w-full bg-bg border border-border rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-accent" />
            </div>
            <div>
              <label className="block text-sm text-text-secondary mb-1">{t.auth.email}</label>
              <input type="email" value={user.email} disabled className="w-full bg-bg border border-border rounded-lg px-4 py-2 text-text-muted text-sm" />
            </div>
            <button onClick={() => setEditing(false)} className="bg-accent hover:bg-accent-hover text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors">
              {t.auth.saveProfile}
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="text-sm"><span className="text-text-secondary">{t.auth.name}:</span> <span className="text-white">{user.name}</span></p>
            <p className="text-sm"><span className="text-text-secondary">{t.auth.email}:</span> <span className="text-white">{user.email}</span></p>
          </div>
        )}
      </div>

      <button
        onClick={() => { signOut(); router.push('/') }}
        className="w-full bg-surface-elevated border border-border text-text-secondary hover:text-white font-medium py-3 rounded-xl transition-colors"
      >
        {t.auth.signOut}
      </button>
    </div>
  )
}
