export type UseToast = () => {
  showToast: (message: string, duration?: 'SHORT' | 'LONG') => void
}
