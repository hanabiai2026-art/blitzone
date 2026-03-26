'use client'

import React from 'react'
import { useLanguage } from '@/lib/language'
import { translations } from '@/lib/translations'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="pt-24 pb-16 max-w-2xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-2">{t.contact.title}</h1>
      <p className="text-text-secondary mb-8">{t.contact.responseTime}</p>
      <ContactForm />
      <p className="text-center text-text-muted text-sm mt-8">
        {t.contact.reachUs}: <a href="mailto:contact@blitzone.com" className="text-accent hover:underline">contact@blitzone.com</a>
      </p>
    </div>
  )
}
