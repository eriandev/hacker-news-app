import type { Navigation } from '@/routes/AppStack'
import type { FormattedNews } from '@/repositories/types/news'

export type FormattedNewsToShow = FormattedNews & {
  haveLink: boolean
  displayLink: string | null
}

export type UseHomeViewModel = () => {
  newsItems: FormattedNewsToShow[]
  refreshing: boolean
  goToWebView: (navigation: Navigation<'homeview'>, uri?: string) => Promise<void>
  onRefresh: () => void
}
