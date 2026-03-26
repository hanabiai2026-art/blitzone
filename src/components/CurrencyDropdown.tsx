'use client'

import React from 'react'
import { useCurrency } from '@/lib/currency'

export default function CurrencyDropdown() {
  const { currency, setCurrency } = useCurrency()

  return (
    <select
      value={currency}
      onChange={(e) => setCurrency(e.target.value as 'USD' | 'JPY')}
      className="bg-surface-elevated border border-border rounded-lg px-2 py-1 text-sm text-text-secondary focus:outline-none focus:border-accent"
    >
      <option value="USD">$ USD</option>
      <option value="JPY">&yen; JPY</option>
    </select>
  )
}
