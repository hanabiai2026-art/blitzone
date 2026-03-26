'use client'

import React from 'react'
import { useLanguage } from '@/lib/language'
import { translations } from '@/lib/translations'
import { games } from '@/lib/data'
import HeroBanner from '@/components/HeroBanner'
import TrustBadges from '@/components/TrustBadges'
import HowItWorks from '@/components/HowItWorks'
import GameCard from '@/components/GameCard'
import PaymentMethods from '@/components/PaymentMethods'

export default function HomePage() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="pt-16">
      <HeroBanner />
      <TrustBadges />
      <div id="how-it-works">
        <HowItWorks />
      </div>

      <section id="games" className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      <PaymentMethods />
    </div>
  )
}
