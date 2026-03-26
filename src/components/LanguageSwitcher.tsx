'use client'

import React from 'react'
import { useLanguage } from '@/lib/language'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as 'en' | 'ja')}
      className="bg-surface-elevated border border-border rounded-lg px-2 py-1 text-sm text-text-secondary focus:outline-none focus:border-accent"
    >
      <option value="en">EN</option>
      <option value="ja">\u65e5\u672c\u8a9e</option>
    </select>
  )
}
