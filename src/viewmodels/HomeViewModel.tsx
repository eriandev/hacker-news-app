import { Linking } from 'react-native'
import { useEffect, useState } from 'react'

import { Toast } from '@/services/Toast'
import { getNewsUseCase } from '@/useCases/GetNewsUseCase'
import type { Navigation } from '@/routes/AppStack'
import type { News } from '@/repositories/types/news'
import type { FormattedNewsToShow, UseHomeViewModel } from '@/viewmodels/types/homeView'

export const useHomeViewModel: UseHomeViewModel = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false)
  const [newsItems, setNewsItems] = useState<FormattedNewsToShow[]>([])

  useEffect(() => {
    getNewsUseCase.execute().then(news => {
      const newsWithMoreOptions = getNewsWithViewOptions(news)
      setNewsItems(newsWithMoreOptions)
    }).catch(error => {
      setNewsItems([])
      console.error(error)
    })
  }, [])

  const getNewsWithViewOptions = (news: News[]): FormattedNewsToShow[] => {
    return news.map(newsData => {
      if (newsData?.link != null) {
        const tail = newsData.link.length > 42 ? '...' : ''

        return ({
          ...newsData,
          haveLink: true,
          displayLink: newsData?.link.slice(0, 42) + tail
        })
      }

      return ({
        ...newsData,
        haveLink: false,
        displayLink: null
      })
    })
  }

  const goToWebView = async (navigation: Navigation<'homeview'>, uri?: string): Promise<void> => {
    if (typeof uri !== 'string') {
      Toast.show('The news has no link')
      return
    }

    const linkSupported = await Linking.canOpenURL(uri)

    if (!linkSupported) {
      Toast.show('The link is not supported')
      return
    }

    navigation.navigate('webview', { uri })
  }

  const onRefresh = (): void => {
    setRefreshing(true)
    getNewsUseCase
      .execute({ refreshData: true })
      .then(news => {
        const newsWithMoreOptions = getNewsWithViewOptions(news)
        setNewsItems(newsWithMoreOptions)
      })
      .catch(error => {
        setNewsItems([])
        console.error(error)
      }).finally(() => {
        setRefreshing(false)
      })
  }

  return { newsItems, refreshing, goToWebView, onRefresh }
}
