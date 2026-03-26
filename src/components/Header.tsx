'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/language'
import { useCurrency } from '@/lib/currency'
import { useCart } from '@/lib/cart'
import { useAuth } from '@/lib/auth'
import { translations } from '@/lib/translations'
import { games } from '@/lib/data'

export default function Header() {
  const { language, setLanguage } = useLanguage()
  const { currency, setCurrency } = useCurrency()
  const { totalItems } = useCart()
  const { isSignedIn, user } = useAuth()
  const t = translations[language]

  const [gamesOpen, setGamesOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [currOpen, setCurrOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)

  const gamesRef = useRef<HTMLDivElement>(null)
  const langRef = useRef<HTMLDivElement>(null)
  const currRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (gamesRef.current && !gamesRef.current.contains(e.target as Node)) setGamesOpen(false)
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false)
      if (currRef.current && !currRef.current.contains(e.target as Node)) setCurrOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const filteredGames = games.filter((g) => {
    const name = language === 'ja' ? g.nameJa : g.name
    return name.toLowerCase().includes(searchQuery.toLowerCase())
  })

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-elevated border-b border-border">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-3">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-accent shrink-0 tracking-tight">
          BLITZONE
        </Link>

        {/* Games Dropdown */}
        <div ref={gamesRef} className="relative shrink-0">
          <button
            onClick={() => setGamesOpen(!gamesOpen)}
            className="flex items-center gap-1 text-sm text-text-secondary hover:text-white transition-colors px-2 py-1"
          >
            {t.header.games}
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>
          {gamesOpen && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-surface border border-border rounded-lg shadow-2xl overflow-hidden">
              {games.map((game) => (
                <Link
                  key={game.id}
                  href={`/${game.slug}`}
                  onClick={() => setGamesOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-surface-elevated transition-colors"
                >
                  <img src={game.image} alt={game.name} className="w-10 h-10 rounded object-cover" />
                  <span className="text-sm text-white">{language === 'ja' ? game.nameJa : game.name}</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Search Bar */}
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder={t.header.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); setSearchOpen(true) }}
            onFocus={() => setSearchOpen(true)}
            onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
            className="w-full bg-surface border border-border rounded-lg px-4 py-2 text-sm text-white placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
          />
          {searchOpen && searchQuery && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-surface border border-border rounded-lg shadow-2xl overflow-hidden z-50">
              {filteredGames.length > 0 ? filteredGames.map((game) => (
                <Link
                  key={game.id}
                  href={`/${game.slug}`}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-surface-elevated transition-colors"
                >
                  <img src={game.image} alt={game.name} className="w-8 h-8 rounded object-cover" />
                  <span className="text-sm text-white">{language === 'ja' ? game.nameJa : game.name}</span>
                </Link>
              )) : (
                <div className="px-4 py-3 text-sm text-text-muted">{t.header.noResults}</div>
              )}
            </div>
          )}
        </div>

        {/* Cart Icon */}
        <Link href="/cart" className="relative shrink-0 p-2 hover:bg-surface rounded-lg transition-colors">
          <svg className="w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
          </svg>
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {totalItems}
            </span>
          )}
        </Link>

        {/* Language Dropdown */}
        <div ref={langRef} className="relative shrink-0">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1 text-sm text-text-secondary hover:text-white transition-colors px-2 py-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth={2} /><path strokeWidth={2} d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>
            {language.toUpperCase()}
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>
          {langOpen && (
            <div className="absolute top-full right-0 mt-2 w-28 bg-surface border border-border rounded-lg shadow-2xl overflow-hidden">
              <button onClick={() => { setLanguage('en'); setLangOpen(false) }} className={`w-full text-left px-4 py-2 text-sm hover:bg-surface-elevated transition-colors ${language === 'en' ? 'text-accent' : 'text-white'}`}>English</button>
              <button onClick={() => { setLanguage('ja'); setLangOpen(false) }} className={`w-full text-left px-4 py-2 text-sm hover:bg-surface-elevated transition-colors ${language === 'ja' ? 'text-accent' : 'text-white'}`}>\u65e5\u672c\u8a9e</button>
            </div>
          )}
        </div>

        {/* Currency Dropdown */}
        <div ref={currRef} className="relative shrink-0">
          <button
            onClick={() => setCurrOpen(!currOpen)}
            className="flex items-center gap-1 text-sm text-text-secondary hover:text-white transition-colors px-2 py-1"
          >
            {currency === 'USD' ? '$' : '\u00a5'} {currency}
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>
          {currOpen && (
            <div className="absolute top-full right-0 mt-2 w-28 bg-surface border border-border rounded-lg shadow-2xl overflow-hidden">
              <button onClick={() => { setCurrency('USD'); setCurrOpen(false) }} className={`w-full text-left px-4 py-2 text-sm hover:bg-surface-elevated transition-colors ${currency === 'USD' ? 'text-accent' : 'text-white'}`}>$ USD</button>
              <button onClick={() => { setCurrency('JPY'); setCurrOpen(false) }} className={`w-full text-left px-4 py-2 text-sm hover:bg-surface-elevated transition-colors ${currency === 'JPY' ? 'text-accent' : 'text-white'}`}>\u00a5 JPY</button>
            </div>
          )}
        </div>

        {/* Auth */}
        {isSignedIn ? (
          <Link href="/account" className="shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm">
            {user?.name?.charAt(0).toUpperCase()}
          </Link>
        ) : (
          <div className="flex items-center gap-2 shrink-0">
            <Link href="/account/signin" className="text-sm text-text-secondary hover:text-white transition-colors">
              {t.header.logIn}
            </Link>
            <Link href="/account/signup" className="text-sm bg-accent hover:bg-accent-hover text-white px-3 py-1.5 rounded-lg transition-colors font-medium">
              {t.header.signUp}
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
