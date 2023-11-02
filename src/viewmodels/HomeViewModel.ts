import { useEffect, useState } from 'react'

import { getNewsUseCase } from '@/useCases/GetNewsUseCase'
import type { FormattedNewsToShow, UseHomeViewModel } from './types/homeView'

export const useHomeViewModel: UseHomeViewModel = () => {
  const [newsItems, setNewsItems] = useState<FormattedNewsToShow[]>([])

  useEffect(() => {
    getNewsUseCase.execute().then(news => {
      const format = news.map((newsData) => {
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

      setNewsItems(format)
    }).catch((error) => {
      setNewsItems([])
      console.error(error)
    })
  }, [])

  return { newsItems }
}
