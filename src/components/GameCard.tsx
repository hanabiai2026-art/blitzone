'use client'

import React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/language'
import { useCurrency } from '@/lib/currency'
import { translations } from '@/lib/translations'
import type { Game } from '@/lib/data'

export default function GameCard({ game }: { game: Game }) {
  const { language } = useLanguage()
  const { formatPrice } = useCurrency()
  const t = translations[language]

  const name = language === 'ja' ? game.nameJa : game.name
  const minPrice = Math.min(...game.services.map((s) => s.priceUSD))

  return (
    <Link href={`/${game.slug}`} className="group relative block overflow-hidden rounded-xl border border-border bg-surface hover:border-accent/50 transition-all duration-300">
      <div className="aspect-[3/4] relative overflow-hidden">
        <img
          src={game.image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
          <div className="flex items-center justify-between">
            <span className="text-secondary text-sm font-semibold">{t.gameCard.startingFrom} {formatPrice(minPrice)}</span>
            <span className="text-accent text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              {t.gameCard.viewServices}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
