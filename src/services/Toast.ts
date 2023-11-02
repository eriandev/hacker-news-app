import { ToastAndroid } from 'react-native'

import type { UseToast } from '@/services/types/toast'

export const useToast: UseToast = () => {
  const showToast = (message: string, duration: 'SHORT' | 'LONG' = 'SHORT'): void => {
    ToastAndroid.show(message, ToastAndroid[duration])
  }

  return { showToast }
}
