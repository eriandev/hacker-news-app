import { Linking } from 'react-native'
import { useEffect, useState } from 'react'

import { Time } from '@/services/Time'
import { Toast } from '@/services/Toast'
import { getNewsUseCase } from '@/useCases/GetNewsUseCase'
import { deleteNewsUseCase } from '@/useCases/DeleteNewsUseCase'
import type { Navigation } from '@/routes/AppStack'
import type { News } from '@/repositories/types/news'
import type { NewsToShow, UseHomeViewModel } from '@/viewmodels/types/homeView'

export const useHomeViewModel: UseHomeViewModel = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false)
  const [newsItems, setNewsItems] = useState<NewsToShow[]>([])

  useEffect(() => {
    getNewsUseCase.execute().then(news => {
      const newsWithMoreOptions = getNewsToShow(news)
      setNewsItems(newsWithMoreOptions)
    }).catch(error => {
      setNewsItems([])
      console.error(error)
    })
  }, [])

  const getNewsToShow = (news: News[]): NewsToShow[] => {
    return news.map(newsData => {
      const title = newsData?.title ?? '[No title]'
      const createdAt = Time.relativeTime(newsData.timestamp)

      if (newsData?.link != null) {
        const tail = newsData.link.length > 42 ? '...' : ''

        return ({
          ...newsData,
          title,
          createdAt,
          haveLink: true,
          displayLink: newsData?.link.slice(0, 42) + tail
        })
      }

      return ({
        ...newsData,
        title,
        createdAt,
        haveLink: false,
        displayLink: null
      })
    })
  }

  const goToWebView = async ({ navigate }: Navigation<'homeview'>, uri?: string): Promise<void> => {
    if (typeof uri !== 'string') {
      Toast.show('The news has no link')
      return
    }

    const linkSupported = await Linking.canOpenURL(uri)

    if (!linkSupported) {
      Toast.show('The link is not supported')
      return
    }

    navigate('webview', { uri })
  }

  const onDelete = async (id: string): Promise<void> => {
    try {
      const news = await deleteNewsUseCase.execute({ id })
      const newsWithMoreOptions = getNewsToShow(news)
      setNewsItems(newsWithMoreOptions)
      Toast.show('The news has been deleted')
    } catch (error) {
      setNewsItems([])
      console.error(error)
    }
  }

  const onRefresh = async (): Promise<void> => {
    setRefreshing(true)

    try {
      const news = await getNewsUseCase.execute({ refreshData: true })
      const newsWithMoreOptions = getNewsToShow(news)
      setNewsItems(newsWithMoreOptions)
    } catch (error) {
      setNewsItems([])
      console.error(error)
    }

    setRefreshing(false)
  }

  return { newsItems, refreshing, goToWebView, onDelete, onRefresh }
}
