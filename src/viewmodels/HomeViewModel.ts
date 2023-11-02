import { useEffect, useState } from 'react'

import { getNewsUseCase } from '@/useCases/GetNewsUseCase'
import type { FormattedNews } from '@/repositories/types/news'

type UseHomeViewModelReturn = {
  newsItems: FormattedNews[]
}

export const useHomeViewModel = (): UseHomeViewModelReturn => {
  const [newsItems, setNewsItems] = useState<FormattedNews[]>([])

  useEffect(() => {
    getNewsUseCase.execute().then(news => {
      setNewsItems(news)
    }).catch((error) => {
      console.error(error)
    })
  }, [])

  return { newsItems }
}
