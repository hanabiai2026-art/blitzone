import PolicyPageClient from '@/components/PolicyPageClient'

export function generateStaticParams() {
  return [
    { slug: 'terms' },
    { slug: 'privacy' },
    { slug: 'delivery' },
    { slug: 'refund' },
  ]
}

export default function PolicyPage() {
  return <PolicyPageClient />
}
