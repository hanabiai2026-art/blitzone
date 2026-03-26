'use client'

import React from 'react'
import { useLanguage } from '@/lib/language'
import { translations } from '@/lib/translations'

const methods = ['Visa', 'Mastercard', 'PayPal', 'Apple Pay', 'Google Pay', 'Stripe']

export default function PaymentMethods() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="w-full py-8 bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-text-muted text-sm mb-4">{t.paymentMethods}</p>
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {methods.map((m) => (
            <span key={m} className="text-text-secondary text-sm font-medium bg-surface-elevated px-4 py-2 rounded-lg border border-border">
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
