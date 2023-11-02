import type { FormattedNews } from '@/repositories/types/news'

export type FormattedNewsToShow = FormattedNews & {
  haveLink: boolean
  displayLink: string | null
}

export type UseHomeViewModel = () => { newsItems: FormattedNewsToShow[] }
