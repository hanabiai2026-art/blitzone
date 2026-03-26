import ComingSoonClient from '@/components/ComingSoonClient'

export function generateStaticParams() {
  return [
    { slug: 'faq' },
    { slug: 'blog' },
    { slug: 'careers' },
    { slug: 'guarantees' },
  ]
}

export default function ComingSoonPage() {
  return <ComingSoonClient />
}
