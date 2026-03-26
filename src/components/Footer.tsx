'use client'

import React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/language'
import { translations } from '@/lib/translations'
import { games } from '@/lib/data'

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language]
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">{t.footer.company}</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-text-secondary text-sm hover:text-white transition-colors">{t.footer.aboutUs}</Link></li>
              <li><Link href="/contact" className="text-text-secondary text-sm hover:text-white transition-colors">{t.footer.contactUs}</Link></li>
              <li><Link href="/coming-soon/blog" target="_blank" className="text-text-secondary text-sm hover:text-white transition-colors">{t.footer.blog}</Link></li>
              <li><Link href="/coming-soon/careers" target="_blank" className="text-text-secondary text-sm hover:text-white transition-colors">{t.footer.workWithUs}</Link></li>
              <li><Link href="/coming-soon/guarantees" target="_blank" className="text-text-secondary text-sm hover:text-white transition-colors">{t.footer.guarantees}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2">
              <li><Link href="/policy/terms" className="text-text-secondary text-sm hover:text-white transition-colors">{t.footer.terms}</Link></li>
              <li><Link href="/policy/privacy" className="text-text-secondary text-sm hover:text-white transition-colors">{t.footer.privacy}</Link></li>
              <li><Link href="/policy/delivery" className="text-text-secondary text-sm hover:text-white transition-colors">{t.footer.delivery}</Link></li>
              <li><Link href="/policy/refund" className="text-text-secondary text-sm hover:text-white transition-colors">{t.footer.refund}</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">{t.footer.customerService}</h4>
            <ul className="space-y-2">
              <li><Link href="/coming-soon/faq" target="_blank" className="text-text-secondary text-sm hover:text-white transition-colors">{t.footer.faq}</Link></li>
              <li><Link href="/#how-it-works" className="text-text-secondary text-sm hover:text-white transition-colors">{t.footer.howItWorks}</Link></li>
            </ul>
          </div>

          {/* Game columns */}
          {games.map((game) => (
            <div key={game.id}>
              <h4 className="text-white font-bold text-sm mb-4">{language === 'ja' ? game.nameJa : game.name}</h4>
              <ul className="space-y-2">
                {game.services.slice(0, 4).map((service) => (
                  <li key={service.id}>
                    <Link href={`/${game.slug}`} className="text-text-secondary text-sm hover:text-white transition-colors">
                      {language === 'ja' ? service.nameJa : service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social + Payment */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            {['Instagram', 'Facebook', 'X', 'YouTube', 'TikTok'].map((social) => (
              <span key={social} className="text-text-muted text-sm hover:text-text-secondary cursor-pointer transition-colors">{social}</span>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            {['Visa', 'Mastercard', 'PayPal', 'Apple Pay', 'Google Pay'].map((pm) => (
              <span key={pm} className="text-text-muted text-xs bg-surface-elevated px-3 py-1 rounded border border-border">{pm}</span>
            ))}
          </div>
          <p className="text-text-muted text-xs text-center max-w-3xl mx-auto mb-2">
            {t.footer.disclaimer}
          </p>
          <p className="text-text-muted text-xs text-center">
            {t.footer.copyright.replace('{year}', String(year))}
          </p>
        </div>
      </div>
    </footer>
  )
}
