'use client'

import React, { createContext, useContext, useState } from 'react'

type Currency = 'USD' | 'JPY'

interface CurrencyContextType {
  currency: Currency
  setCurrency: (c: Currency) => void
  formatPrice: (usdPrice: number) => string
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: 'USD',
  setCurrency: () => {},
  formatPrice: () => '',
})

export function formatPrice(usdPrice: number, currency: Currency): string {
  if (currency === 'JPY') return `\u00a5${Math.round(usdPrice * 150).toLocaleString()}`
  return `$${usdPrice.toFixed(2)}`
}

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<Currency>('USD')

  const format = (usdPrice: number) => formatPrice(usdPrice, currency)

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice: format }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  return useContext(CurrencyContext)
}
