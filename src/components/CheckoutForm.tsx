'use client'

import React, { useState } from 'react'
import { useLanguage } from '@/lib/language'
import { useAuth } from '@/lib/auth'
import { translations } from '@/lib/translations'

interface CheckoutFormProps {
  onSubmit: (data: { name: string; email: string; gameAccount: string; notes: string }) => void
}

export default function CheckoutForm({ onSubmit }: CheckoutFormProps) {
  const { language } = useLanguage()
  const { user } = useAuth()
  const t = translations[language]

  const [name, setName] = useState(user?.name || '')
  const [email, setEmail] = useState(user?.email || '')
  const [gameAccount, setGameAccount] = useState('')
  const [notes, setNotes] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('card')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ name, email, gameAccount, notes })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-xl font-bold">{t.checkout.customerInfo}</h2>

      <div>
        <label className="block text-sm text-text-secondary mb-1">{t.checkout.name}</label>
        <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-accent" />
      </div>

      <div>
        <label className="block text-sm text-text-secondary mb-1">{t.checkout.email}</label>
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-accent" />
      </div>

      <div>
        <label className="block text-sm text-text-secondary mb-1">{t.checkout.gameAccount}</label>
        <input type="text" required value={gameAccount} onChange={(e) => setGameAccount(e.target.value)} className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-accent" />
      </div>

      <div>
        <label className="block text-sm text-text-secondary mb-1">{t.checkout.notes}</label>
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-accent resize-none" />
      </div>

      <div>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">{t.checkout.paymentMethod}</h3>
        <div className="flex gap-3">
          <button type="button" onClick={() => setPaymentMethod('card')} className={`flex-1 py-3 rounded-lg border text-sm font-medium transition-colors ${paymentMethod === 'card' ? 'border-accent bg-accent/10 text-accent' : 'border-border text-text-secondary hover:border-text-muted'}`}>
            {t.checkout.creditCard}
          </button>
          <button type="button" onClick={() => setPaymentMethod('paypal')} className={`flex-1 py-3 rounded-lg border text-sm font-medium transition-colors ${paymentMethod === 'paypal' ? 'border-accent bg-accent/10 text-accent' : 'border-border text-text-secondary hover:border-text-muted'}`}>
            {t.checkout.paypal}
          </button>
        </div>
      </div>

      {paymentMethod === 'card' && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-text-secondary mb-1">{t.checkout.cardNumber}</label>
            <input type="text" placeholder="4242 4242 4242 4242" className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-accent" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-text-secondary mb-1">{t.checkout.expiry}</label>
              <input type="text" placeholder="12/28" className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-accent" />
            </div>
            <div>
              <label className="block text-sm text-text-secondary mb-1">{t.checkout.cvv}</label>
              <input type="text" placeholder="123" className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-accent" />
            </div>
          </div>
        </div>
      )}

      <button type="submit" className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-3.5 rounded-xl text-lg transition-colors">
        {t.checkout.placeOrder}
      </button>
    </form>
  )
}
