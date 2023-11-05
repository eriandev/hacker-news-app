import type { Navigation } from '@/routes/AppStack'
import type { News } from '@/repositories/types/news'

export type FormattedNewsToShow = News & {
  haveLink: boolean
  displayLink: string | null
}

export type UseHomeViewModel = () => {
  newsItems: FormattedNewsToShow[]
  refreshing: boolean
  goToWebView: (navigation: Navigation<'homeview'>, uri?: string) => Promise<void>
  onRefresh: () => void
}
