import { useCallback, useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'

import colors from './colors'

export type FontWeight = keyof typeof fontWeight
export type FontFamily = typeof availableFamilies[number]
export type FontSize = typeof fontSize[keyof typeof fontSize]

export const fontSize = {
  xs: 8,
  sm: 10,
  base: 12,
  lg: 14,
  xl: 16,
  '2xl': 18
} as const

export const fontWeight = {
  regular: '400',
  semibold: '600'
} as const

export const availableFamilies = [
  'red-hat-text-400',
  'red-hat-text-600',
  'red-hat-text-italic'
] as const

export const baseFontStyle = {
  color: colors.black,
  fontFamily: availableFamilies[0],
  fontSize: fontSize.base
} as const

export function useLoadFonts (): [boolean, Error | null] {
  const [fontsLoaded, fontError] = useFonts({
    'red-hat-text-400': require('~/fonts/red-hat-text-400.ttf'),
    'red-hat-text-600': require('~/fonts/red-hat-text-600.ttf'),
    'red-hat-text-italic': require('~/fonts/red-hat-text-italic.ttf')
  })

  const onLayoutRootView = useCallback(() => {
    if (fontsLoaded || (fontError !== null)) {
      SplashScreen.hideAsync().then(
        () => {},
        () => {}
      )
    }
  }, [fontsLoaded, fontError])

  useEffect(() => {
    onLayoutRootView()
  }, [fontsLoaded, fontError])

  return [fontsLoaded, fontError]
}
