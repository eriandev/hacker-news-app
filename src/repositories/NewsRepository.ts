import { API_URL } from '@/util/consts'
import { Storage } from '@/services/Storage'
import type { News, APINewsResponse } from './types/news'

export default class NewsRepository {
  private readonly STORAGED_NEWS_KEY = '@storaged_news'
  private readonly STORAGED_DELETED_NEWS_KEY = '@storaged_deleted_news'

  async getNews (refreshData: boolean): Promise<News[]> {
    if (refreshData) await Storage.delete(this.STORAGED_NEWS_KEY)

    const deletedNews = await Storage.get<string[]>(this.STORAGED_DELETED_NEWS_KEY) ?? []
    const storagedNews = await Storage.get<News[]>(this.STORAGED_NEWS_KEY)
    if (storagedNews != null) return storagedNews.filter(({ id }) => !deletedNews.includes(id))

    const response = await fetch(`${API_URL}/search_by_date?query=mobile`)
    const { hits } = await response.json() as APINewsResponse
    const news = this.getFormattedNews(hits).filter(({ id }) => !deletedNews.includes(id))
    await Storage.set(this.STORAGED_NEWS_KEY, news)

    return news
  }

  async deleteNews (id: string): Promise<News[]> {
    const deletedNews = await Storage.get<string[]>(this.STORAGED_DELETED_NEWS_KEY) ?? []
    await Storage.set<string[]>(this.STORAGED_DELETED_NEWS_KEY, [...deletedNews, id])

    return await this.getNews(false)
  }

  private getFormattedNews (news: APINewsResponse['hits']): News[] {
    return news.map(hit => ({
      id: hit.objectID.toString(),
      author: hit.author,
      link: hit.story_url,
      title: hit.story_title,
      timestamp: hit.created_at_i
    }))
  }
}
