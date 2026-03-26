'use client'

import React from 'react'
import { useLanguage } from '@/lib/language'
import { translations } from '@/lib/translations'

export default function AboutPage() {
  const { language } = useLanguage()
  const t = translations[language]

  const stats = [
    { label: t.about.stat1, icon: '\ud83d\udcc5' },
    { label: t.about.stat2, icon: '\ud83d\ude80' },
    { label: t.about.stat3, icon: '\ud83c\udfae' },
    { label: t.about.stat4, icon: '\u2b50' },
  ]

  const values = [
    { title: t.about.value1, desc: t.about.value1Desc, icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
    { title: t.about.value2, desc: t.about.value2Desc, icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
    { title: t.about.value3, desc: t.about.value3Desc, icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
    { title: t.about.value4, desc: t.about.value4Desc, icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg> },
  ]

  return (
    <div className="pt-24 pb-16 max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-6">{t.about.title}</h1>
      <p className="text-text-secondary text-lg mb-12 leading-relaxed">{t.about.intro}</p>

      <div className="bg-surface border border-border rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">{t.about.mission}</h2>
        <p className="text-text-secondary leading-relaxed">{t.about.missionText}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {stats.map((stat, i) => (
          <div key={i} className="bg-surface border border-border rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="text-white font-bold text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-8">{t.about.whyChooseUs}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {values.map((v, i) => (
          <div key={i} className="bg-surface border border-border rounded-xl p-6">
            <div className="text-accent mb-4">{v.icon}</div>
            <h3 className="text-lg font-bold mb-2">{v.title}</h3>
            <p className="text-text-secondary text-sm">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
