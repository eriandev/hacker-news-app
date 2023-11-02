import NewsRepository from '@/repositories/NewsRepository'
import StorageRepository from '@/repositories/StorageRepository'
import type { FormattedNews } from '@/repositories/types/news'

class GetNewsUseCase {
  private readonly STORAGED_NEWS_KEY = '@storaged_news'

  constructor (
    private readonly newsService: NewsRepository,
    private readonly storageService: StorageRepository
  ) {}

  async execute ({ refreshData = false }: { refreshData?: boolean } = {}): Promise<FormattedNews[]> {
    if (refreshData) await this.storageService.clear()

    const storagedNews = await this.storageService.get<FormattedNews[]>(this.STORAGED_NEWS_KEY)

    if (storagedNews != null) return storagedNews

    const { news } = await this.newsService.getNews()
    await this.storageService.set(this.STORAGED_NEWS_KEY, news)
    return news
  }
}

export const getNewsUseCase = new GetNewsUseCase(new NewsRepository(), new StorageRepository())
