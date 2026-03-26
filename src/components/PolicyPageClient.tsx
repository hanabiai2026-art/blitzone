'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import { useLanguage } from '@/lib/language'
import { policies } from '@/lib/policies'

export default function PolicyPageClient() {
  const params = useParams()
  const slug = params.slug as string
  const { language } = useLanguage()

  const policy = policies[slug]
  if (!policy) {
    return (
      <div className="pt-24 pb-16 max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">404</h1>
        <p className="text-text-secondary">Policy not found.</p>
      </div>
    )
  }

  const title = language === 'ja' ? policy.titleJa : policy.title
  const content = language === 'ja' ? policy.contentJa : policy.contentEn

  return (
    <div className="pt-24 pb-16 max-w-3xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">{title}</h1>
      <div className="prose prose-invert max-w-none">
        {content.split('\n\n').map((block, i) => {
          if (block.startsWith('**') && block.endsWith('**')) {
            return <h2 key={i} className="text-xl font-bold mt-8 mb-4 text-white">{block.replace(/\*\*/g, '')}</h2>
          }
          if (block.startsWith('**')) {
            const parts = block.split('**')
            return (
              <div key={i} className="mb-4">
                {parts.map((part, j) =>
                  j % 2 === 1 ? <h3 key={j} className="text-lg font-bold mt-6 mb-3 text-white">{part}</h3> : <p key={j} className="text-text-secondary leading-relaxed whitespace-pre-line">{part}</p>
                )}
              </div>
            )
          }
          if (block.startsWith('- ')) {
            return (
              <ul key={i} className="list-disc list-inside space-y-1 mb-4 text-text-secondary">
                {block.split('\n').map((line, j) => (
                  <li key={j}>{line.replace(/^- /, '')}</li>
                ))}
              </ul>
            )
          }
          return <p key={i} className="text-text-secondary leading-relaxed mb-4 whitespace-pre-line">{block}</p>
        })}
      </div>
    </div>
  )
}
