import AsyncStorage from '@react-native-async-storage/async-storage'

export default class StorageRepository {
  async get<T> (key: string): Promise<T | null> {
    try {
      const item = await AsyncStorage.getItem(key)
      return typeof item === 'string' ? JSON.parse(item) : null
    } catch (error) {
      console.error(error)
      return null
    }
  }

  async set<T> (key: string, data: T): Promise<void> {
    try {
      const item = typeof data !== 'string' ? JSON.stringify(data) : data
      await AsyncStorage.setItem(key, item)
    } catch (error) {
      console.error(error)
    }
  }

  async delete (key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key)
    } catch (error) {
      console.error(error)
    }
  }

  async clear (): Promise<void> {
    try {
      await AsyncStorage.clear()
    } catch (error) {
      console.error(error)
    }
  }
}
