import type { Navigation } from '@/routes/AppStack'
import type { News } from '@/repositories/types/news'

export type NewsToShow = News & {
  haveLink: boolean
  displayLink: string | null
}

export type UseHomeViewModel = () => {
  newsItems: NewsToShow[]
  refreshing: boolean
  goToWebView: (navigation: Navigation<'homeview'>, uri?: string) => Promise<void>
  onDelete: (id: string) => Promise<void>
  onRefresh: () => Promise<void>
}
