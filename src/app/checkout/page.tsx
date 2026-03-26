'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/language'
import { useCurrency } from '@/lib/currency'
import { useCart } from '@/lib/cart'
import { translations } from '@/lib/translations'
import CheckoutForm from '@/components/CheckoutForm'

export default function CheckoutPage() {
  const { language } = useLanguage()
  const { formatPrice } = useCurrency()
  const { items, totalPriceUSD, clearCart } = useCart()
  const t = translations[language]

  const [orderRef, setOrderRef] = useState('')
  const [success, setSuccess] = useState(false)

  const handleOrder = () => {
    const ref = 'BZ-' + Math.random().toString(36).substring(2, 8).toUpperCase()
    setOrderRef(ref)
    setSuccess(true)
    clearCart()
  }

  if (success) {
    return (
      <div className="pt-24 pb-16 max-w-2xl mx-auto px-4 text-center">
        <svg className="w-24 h-24 text-success mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h1 className="text-3xl font-bold mb-4">{t.checkout.success}</h1>
        <p className="text-text-secondary mb-2">{t.checkout.orderRef}: <span className="text-secondary font-bold">{orderRef}</span></p>
        <Link href="/" className="inline-block mt-6 bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-xl transition-colors">
          {t.cart.continueShopping}
        </Link>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="pt-24 pb-16 max-w-2xl mx-auto px-4 text-center">
        <p className="text-text-secondary text-lg mb-4">{t.cart.empty}</p>
        <Link href="/#games" className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-xl transition-colors">
          {t.cart.browseServices}
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-16 max-w-6xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">{t.checkout.title}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div className="bg-surface border border-border rounded-xl p-6 h-fit">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">{t.checkout.orderSummary}</h2>
            <Link href="/cart" className="text-sm text-accent hover:underline">{t.cart.editCart}</Link>
          </div>
          <div className="space-y-3 mb-4">
            {items.map((item) => (
              <div key={item.serviceId} className="flex items-center justify-between text-sm">
                <div>
                  <span className="text-white">{language === 'ja' ? item.serviceNameJa : item.serviceName}</span>
                  <span className="text-text-muted ml-2">x{item.quantity}</span>
                </div>
                <span className="text-secondary font-semibold">{formatPrice(item.priceUSD * item.quantity)}</span>
              </div>
            ))}
          </div>
          <div className="pt-4 border-t border-border flex items-center justify-between">
            <span className="text-lg font-bold">{t.checkout.total}</span>
            <span className="text-2xl font-bold text-secondary">{formatPrice(totalPriceUSD)}</span>
          </div>
        </div>

        {/* Form */}
        <CheckoutForm onSubmit={handleOrder} />
      </div>
    </div>
  )
}
