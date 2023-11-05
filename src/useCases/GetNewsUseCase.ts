import NewsRepository from '@/repositories/NewsRepository'
import type { News } from '@/repositories/types/news'

class GetNewsUseCase {
  constructor (private readonly newsRepository: NewsRepository) {}

  async execute ({ refreshData = false }: { refreshData?: boolean } = {}): Promise<News[]> {
    return await this.newsRepository.getNews(refreshData)
  }
}

export const getNewsUseCase = new GetNewsUseCase(new NewsRepository())
