import NewsRepository from '@/repositories/NewsRepository'
import type { News } from '@/repositories/types/news'

class DeleteNewsUseCase {
  constructor (private readonly newsRepository: NewsRepository) {}

  async execute ({ id }: { id: string }): Promise<News[]> {
    return await this.newsRepository.deleteNews(id)
  }
}

export const deleteNewsUseCase = new DeleteNewsUseCase(new NewsRepository())
