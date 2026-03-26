'use client'

import React, { useState } from 'react'
import { useLanguage } from '@/lib/language'
import { useCurrency } from '@/lib/currency'
import { useCart } from '@/lib/cart'
import { translations } from '@/lib/translations'
import type { Service, Game } from '@/lib/data'

export default function ServiceCard({ service, game }: { service: Service; game: Game }) {
  const { language } = useLanguage()
  const { formatPrice } = useCurrency()
  const { addItem } = useCart()
  const t = translations[language]
  const [toast, setToast] = useState(false)

  const name = language === 'ja' ? service.nameJa : service.name
  const desc = language === 'ja' ? service.descriptionJa : service.description
  const delivery = language === 'ja' ? service.deliveryJa : service.delivery

  const handleAdd = () => {
    addItem({
      gameId: game.id,
      serviceId: service.id,
      gameName: game.name,
      gameNameJa: game.nameJa,
      serviceName: service.name,
      serviceNameJa: service.nameJa,
      priceUSD: service.priceUSD,
      image: game.image,
    })
    setToast(true)
    setTimeout(() => setToast(false), 2000)
  }

  return (
    <div className="bg-surface border border-border rounded-xl p-6 hover:border-accent/30 transition-colors relative">
      {toast && (
        <div className="absolute top-4 right-4 bg-success text-white text-xs font-bold px-3 py-1.5 rounded-lg animate-pulse z-10">
          {t.service.addedToCart}
        </div>
      )}
      <h3 className="text-lg font-bold text-white mb-2">{name}</h3>
      <p className="text-text-secondary text-sm mb-4 leading-relaxed">{desc}</p>
      <div className="flex items-center gap-2 text-sm text-text-muted mb-4">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        {t.service.delivery}: {delivery}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-secondary">{formatPrice(service.priceUSD)}</span>
        <button
          onClick={handleAdd}
          className="bg-accent hover:bg-accent-hover text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
        >
          {t.service.addToCart}
        </button>
      </div>
    </div>
  )
}
