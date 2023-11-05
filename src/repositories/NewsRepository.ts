import { API_URL } from '@/util/consts'
import { Storage } from '@/services/Storage'
import type { News, APINewsResponse } from './types/news'

export default class NewsRepository {
  private readonly STORAGED_NEWS_KEY = '@storaged_news'

  async getNews (refreshData: boolean): Promise<News[]> {
    if (refreshData) await Storage.delete(this.STORAGED_NEWS_KEY)

    const storagedNews = await Storage.get<News[]>(this.STORAGED_NEWS_KEY)
    if (storagedNews != null) return storagedNews

    const response = await fetch(`${API_URL}/search_by_date?query=mobile`)
    const { hits } = await response.json() as APINewsResponse
    const news = this.getFormattedNews(hits)
    await Storage.set(this.STORAGED_NEWS_KEY, news)

    return news
  }

  private getFormattedNews (news: APINewsResponse['hits']): News[] {
    return news.map(hit => ({
      id: hit.objectID.toString(),
      author: hit.author,
      link: hit.story_url,
      title: hit.story_title,
      createdAt: hit.created_at_i
    }))
  }
}
