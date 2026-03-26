'use client'

import React from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useLanguage } from '@/lib/language'
import { translations } from '@/lib/translations'

export function generateStaticParams() {
  return [
    { slug: 'faq' },
    { slug: 'blog' },
    { slug: 'careers' },
    { slug: 'guarantees' },
  ]
}

const titles: Record<string, { en: string; ja: string }> = {
  faq: { en: 'FAQ', ja: '\u3088\u304f\u3042\u308b\u8cea\u554f' },
  blog: { en: 'Blog', ja: '\u30d6\u30ed\u30b0' },
  careers: { en: 'Work with Us', ja: '\u63a1\u7528\u60c5\u5831' },
  guarantees: { en: 'Guarantees', ja: '\u4fdd\u8a3c' },
}

export default function ComingSoonPage() {
  const params = useParams()
  const slug = params.slug as string
  const { language } = useLanguage()
  const t = translations[language]

  const pageTitle = titles[slug]
    ? language === 'ja' ? titles[slug].ja : titles[slug].en
    : slug

  return (
    <div className="pt-24 pb-16 max-w-2xl mx-auto px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">{pageTitle}</h1>
      <div className="bg-surface border border-border rounded-xl p-12 mb-8">
        <svg className="w-20 h-20 text-accent mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="text-2xl font-bold mb-3">{t.comingSoon.title}</h2>
        <p className="text-text-secondary">{t.comingSoon.message}</p>
      </div>
      <Link href="/" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-xl transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        {t.comingSoon.backHome}
      </Link>
    </div>
  )
}
