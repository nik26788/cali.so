export const seo = {
  title: 'Nik | 开发者、FPV飞手',
  description: '我叫 Nik，一名开发者，FPV无人机探索者，喜欢安静，也喜欢刺激。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://nikdev.cn'
      : 'http://localhost:3000'
  ),
} as const
