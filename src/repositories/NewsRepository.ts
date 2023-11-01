import { API_URL } from '@/util/consts'
import type { FormattedNews, GetNewsResponse, NewsResponse } from './types/news'

export default class NewsRepository {
  async getNews (): Promise<GetNewsResponse> {
    const response = await fetch(`${API_URL}/search_by_date?query=mobile`)
    const { hits, hitsPerPage, page, nbPages } = await response.json() as NewsResponse

    return ({
      page,
      pageLimit: nbPages,
      newsPerPage: hitsPerPage,
      news: this.getFormattedNewsResponse(hits)
    })
  }

  private getFormattedNewsResponse (news: NewsResponse['hits']): FormattedNews[] {
    return news.map(hit => ({
      author: hit.author,
      link: hit.story_url,
      title: hit.story_title,
      createdAt: hit.created_at_i
    }))
  }
}
