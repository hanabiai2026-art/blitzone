import { games } from '@/lib/data'
import GamePageClient from '@/components/GamePageClient'

export function generateStaticParams() {
  return games.map((game) => ({ 'game-slug': game.slug }))
}

export default function GamePage() {
  return <GamePageClient />
}
