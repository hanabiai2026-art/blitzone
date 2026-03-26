'use client'

import React, { useState } from 'react'
import { useLanguage } from '@/lib/language'
import { translations } from '@/lib/translations'

export default function ContactForm() {
  const { language } = useLanguage()
  const t = translations[language]

  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="bg-surface border border-success/30 rounded-xl p-8 text-center">
        <svg className="w-16 h-16 text-success mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <p className="text-lg font-semibold text-white mb-2">{t.contact.success}</p>
        <p className="text-text-secondary text-sm">{t.contact.responseTime}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm text-text-secondary mb-1">{t.contact.nameLabel}</label>
        <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-accent" />
      </div>
      <div>
        <label className="block text-sm text-text-secondary mb-1">{t.contact.emailLabel}</label>
        <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-accent" />
      </div>
      <div>
        <label className="block text-sm text-text-secondary mb-1">{t.contact.subjectLabel}</label>
        <input type="text" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-accent" />
      </div>
      <div>
        <label className="block text-sm text-text-secondary mb-1">{t.contact.messageLabel}</label>
        <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-accent resize-none" />
      </div>
      <button type="submit" className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-3 rounded-xl transition-colors">
        {t.contact.send}
      </button>
    </form>
  )
}
