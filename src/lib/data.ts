export interface Service {
  id: string
  name: string
  nameJa: string
  description: string
  descriptionJa: string
  priceUSD: number
  delivery: string
  deliveryJa: string
}

export interface Game {
  id: string
  name: string
  nameJa: string
  slug: string
  image: string
  description: string
  descriptionJa: string
  services: Service[]
}

export const games: Game[] = [
  {
    id: 'diablo-iii',
    name: 'Diablo III',
    nameJa: 'ディアブロ III',
    slug: 'diablo-iii',
    image: '/images/diablo-iii/banner.jpg',
    description: 'Conquer Greater Rifts, farm Paragon levels, and complete Season Journeys with Blitzone.',
    descriptionJa: 'グレーターリフト制覇、パラゴンレベル上げ、シーズンジャーニー完了をBlitzoneで。',
    services: [
      {
        id: 'd3-paragon',
        name: 'Paragon Leveling',
        nameJa: 'パラゴンレベリング',
        description: 'Boost your Paragon levels from 100 to 2000+. Our pros farm efficiently with optimized builds to maximize XP per hour.',
        descriptionJa: 'パラゴンレベルを100から2000+まで上昇。プロが最適化されたビルドで効率的にXPを稼ぎます。',
        priceUSD: 29.99,
        delivery: '1–3 days',
        deliveryJa: '1〜3日',
      },
      {
        id: 'd3-gr-push',
        name: 'Greater Rift Push',
        nameJa: 'グレーターリフト',
        description: 'Clear Greater Rifts 100–150 for leaderboard placement. Our players push the hardest content with precision builds.',
        descriptionJa: 'グレーターリフト100〜150をクリア。リーダーボード入りを目指して最高難度コンテンツに挑みます。',
        priceUSD: 49.99,
        delivery: '2–5 days',
        deliveryJa: '2〜5日',
      },
      {
        id: 'd3-gear-set',
        name: 'Full Gear Set',
        nameJa: 'フル装備セット',
        description: 'Farm a complete Ancient or Primal Ancient gear set with optimized stats for your chosen build.',
        descriptionJa: '選択したビルド向けに最適化された古代/太古セットを収集。',
        priceUSD: 39.99,
        delivery: '2–4 days',
        deliveryJa: '2〜4日',
      },
      {
        id: 'd3-season',
        name: 'Season Journey',
        nameJa: 'シーズンジャーニー',
        description: 'Complete the full Season Journey including all chapters. Unlock the exclusive seasonal rewards and portrait frame.',
        descriptionJa: '全チャプターを含むシーズンジャーニーを完了。限定シーズン報酬とポートレートフレームを解除。',
        priceUSD: 34.99,
        delivery: '3–5 days',
        deliveryJa: '3〜5日',
      },
      {
        id: 'd3-coaching',
        name: 'Coaching Session',
        nameJa: 'コーチング',
        description: 'Live 1-hour coaching session covering build optimization, Greater Rift strategies, and efficient farming routes.',
        descriptionJa: 'ビルド最適化、グレーターリフト戦略、効率的なファーミングルートの1時間ライブコーチング。',
        priceUSD: 19.99,
        delivery: 'Within 24h',
        deliveryJa: '24時間以内',
      },
    ],
  },
  {
    id: 'diablo-iv',
    name: 'Diablo IV',
    nameJa: 'ディアブロ IV',
    slug: 'diablo-iv',
    image: '/images/diablo-iv/portrait.jpg',
    description: 'Push World Tiers, clear The Pit, farm Tormented bosses, and optimize endgame builds.',
    descriptionJa: 'ワールドティア突破、ピット攻略、トーメントボス討伐、エンドゲームビルド最適化。',
    services: [
      {
        id: 'd4-world-tier',
        name: 'World Tier Boost',
        nameJa: 'ワールドティアブースト',
        description: 'Push through the WT3 and WT4 capstone dungeons. Our pros clear the toughest content so you unlock endgame.',
        descriptionJa: 'WT3/WT4キャップストーンダンジョンを突破。プロがエンドゲームを解放します。',
        priceUSD: 34.99,
        delivery: '1–2 days',
        deliveryJa: '1〜2日',
      },
      {
        id: 'd4-pit-push',
        name: 'Pit Pushing',
        nameJa: 'ピット攻略',
        description: 'Clear Pit tiers 50–100+ for the best loot and masterworking materials. Our top players push the hardest content.',
        descriptionJa: 'ピット階層50〜100+をクリア。最高のルートとマスターワーキング素材を獲得。',
        priceUSD: 59.99,
        delivery: '2–5 days',
        deliveryJa: '2〜5日',
      },
      {
        id: 'd4-tormented-boss',
        name: 'Tormented Boss Farm',
        nameJa: 'トーメントボス',
        description: 'All Tormented boss kills for unique loot drops. We farm efficiently across all boss encounters.',
        descriptionJa: '全トーメントボスを討伐してユニークドロップを獲得。全ボスを効率的にファーム。',
        priceUSD: 44.99,
        delivery: '1–3 days',
        deliveryJa: '1〜3日',
      },
      {
        id: 'd4-leveling',
        name: 'Level 1–100',
        nameJa: 'レベル1-100',
        description: 'Fresh character to max level. We complete the campaign and push through the leveling grind efficiently.',
        descriptionJa: '新キャラを最大レベルへ。キャンペーン完了と効率的なレベリング。',
        priceUSD: 24.99,
        delivery: '1–2 days',
        deliveryJa: '1〜2日',
      },
      {
        id: 'd4-build-opt',
        name: 'Build Optimization',
        nameJa: 'ビルド最適化',
        description: 'A pro player optimizes your endgame build — gear, Paragon boards, skill tree, and aspect setup for maximum power.',
        descriptionJa: 'プロがエンドゲームビルドを最適化 — 装備、パラゴンボード、スキルツリー、アスペクト設定。',
        priceUSD: 29.99,
        delivery: 'Within 24h',
        deliveryJa: '24時間以内',
      },
    ],
  },
]
