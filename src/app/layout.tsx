import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/lib/language'
import { CurrencyProvider } from '@/lib/currency'
import { AuthProvider } from '@/lib/auth'
import { CartProvider } from '@/lib/cart'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Blitzone - Elite Game Boosting',
  description: 'Conquer Hell. Claim Glory. Professional Diablo boosting by top-tier players.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <CurrencyProvider>
            <AuthProvider>
              <CartProvider>
                <Header />
                <main className="min-h-screen">{children}</main>
                <Footer />
              </CartProvider>
            </AuthProvider>
          </CurrencyProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
