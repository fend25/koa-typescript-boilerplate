export const isProd = process.env.NODE_ENV === 'production'
export const isDev = !isProd

import 'src/utils/logger'

export const parseNumber = (num: any, fallback: number): number => {
  const parsed = parseInt(num, 10)
  return !isNaN(parsed) ? parsed : fallback
}
