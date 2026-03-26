'use client'

import React from 'react'
import { useLanguage } from '@/lib/language'
import { useCurrency } from '@/lib/currency'
import { useCart, type CartItem } from '@/lib/cart'
import { translations } from '@/lib/translations'

export default function CartItemRow({ item }: { item: CartItem }) {
  const { language } = useLanguage()
  const { formatPrice } = useCurrency()
  const { removeItem, updateQuantity } = useCart()
  const t = translations[language]

  const gameName = language === 'ja' ? item.gameNameJa : item.gameName
  const serviceName = language === 'ja' ? item.serviceNameJa : item.serviceName

  return (
    <div className="flex items-center gap-4 bg-surface border border-border rounded-xl p-4">
      <img src={item.image} alt={gameName} className="w-16 h-16 rounded-lg object-cover shrink-0" />
      <div className="flex-1 min-w-0">
        <h3 className="text-white font-semibold text-sm truncate">{serviceName}</h3>
        <p className="text-text-muted text-xs">{gameName}</p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={() => updateQuantity(item.serviceId, item.quantity - 1)}
          className="w-8 h-8 flex items-center justify-center bg-surface-elevated rounded-lg text-text-secondary hover:text-white transition-colors border border-border"
        >
          -
        </button>
        <span className="w-8 text-center text-white text-sm font-medium">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.serviceId, item.quantity + 1)}
          className="w-8 h-8 flex items-center justify-center bg-surface-elevated rounded-lg text-text-secondary hover:text-white transition-colors border border-border"
        >
          +
        </button>
      </div>
      <div className="text-secondary font-bold text-sm shrink-0 w-24 text-right">
        {formatPrice(item.priceUSD * item.quantity)}
      </div>
      <button
        onClick={() => removeItem(item.serviceId)}
        className="text-text-muted hover:text-accent transition-colors shrink-0"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
      </button>
    </div>
  )
}
