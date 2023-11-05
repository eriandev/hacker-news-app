import { ToastAndroid } from 'react-native'

class ToastService {
  show (message: string, duration: 'SHORT' | 'LONG' = 'SHORT'): void {
    ToastAndroid.show(message, ToastAndroid[duration])
  }
}

export const Toast = new ToastService()
