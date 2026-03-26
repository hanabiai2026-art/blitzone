'use client'

import React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/language'
import { translations } from '@/lib/translations'

export default function HeroBanner() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="relative w-full min-h-[520px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-bg to-surface" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-20">
        <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-1.5 rounded-full text-sm font-medium mb-6">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          {t.hero.trustBadge}
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          <span className="text-white">{t.hero.headline.split('.')[0]}.</span>
          <br />
          <span className="text-accent">{t.hero.headline.split('.')[1]}</span>
        </h1>
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8">
          {t.hero.subtitle}
        </p>
        <Link
          href="#games"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg shadow-accent/25"
        >
          {t.hero.cta}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </Link>
      </div>
    </section>
  )
}
