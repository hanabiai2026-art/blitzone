'use client'

import React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/language'
import { useCurrency } from '@/lib/currency'
import { useCart } from '@/lib/cart'
import { translations } from '@/lib/translations'
import CartItemRow from '@/components/CartItemRow'

export default function CartPage() {
  const { language } = useLanguage()
  const { formatPrice } = useCurrency()
  const { items, totalPriceUSD } = useCart()
  const t = translations[language]

  return (
    <div className="pt-24 pb-16 max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">{t.cart.title}</h1>

      {items.length === 0 ? (
        <div className="text-center py-16">
          <svg className="w-20 h-20 text-text-muted mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
          </svg>
          <p className="text-text-secondary text-lg mb-4">{t.cart.empty}</p>
          <Link href="/#games" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            {t.cart.browseServices}
          </Link>
        </div>
      ) : (
        <div>
          <div className="space-y-3 mb-8">
            {items.map((item) => (
              <CartItemRow key={item.serviceId} item={item} />
            ))}
          </div>

          <div className="bg-surface border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-text-secondary">{t.cart.subtotal}</span>
              <span className="text-white font-semibold">{formatPrice(totalPriceUSD)}</span>
            </div>
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <span className="text-lg font-bold">{t.cart.total}</span>
              <span className="text-2xl font-bold text-secondary">{formatPrice(totalPriceUSD)}</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/checkout" className="flex-1 bg-accent hover:bg-accent-hover text-white font-bold py-3 rounded-xl text-center transition-colors">
                {t.cart.proceedToCheckout}
              </Link>
              <Link href="/#games" className="flex-1 bg-surface-elevated border border-border text-text-secondary hover:text-white font-medium py-3 rounded-xl text-center transition-colors">
                {t.cart.continueShopping}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
