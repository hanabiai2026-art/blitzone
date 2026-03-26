'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useLanguage } from '@/lib/language'
import { games } from '@/lib/data'
import ServiceCard from '@/components/ServiceCard'

export default function GamePageClient() {
  const params = useParams()
  const slug = params['game-slug'] as string
  const { language } = useLanguage()

  const game = games.find((g) => g.slug === slug)

  if (!game) {
    return (
      <div className="pt-24 pb-16 max-w-2xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">404</h1>
        <p className="text-text-secondary mb-6">Game not found.</p>
        <Link href="/" className="text-accent hover:underline">Back to Home</Link>
      </div>
    )
  }

  const name = language === 'ja' ? game.nameJa : game.name
  const desc = language === 'ja' ? game.descriptionJa : game.description

  return (
    <div className="pt-16">
      {/* Game Banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src={game.image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 pb-8">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-2">{name}</h1>
          <p className="text-text-secondary text-lg max-w-2xl">{desc}</p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {game.services.map((service) => (
            <ServiceCard key={service.id} service={service} game={game} />
          ))}
        </div>
      </div>
    </div>
  )
}
