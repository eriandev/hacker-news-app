import { type ImageStyle, type TextStyle, type ViewStyle, StyleSheet } from 'react-native'

import type { FontFamily, FontSize, FontWeight } from './fonts'
import type { Color } from './colors'

export type OwnImageStyle = ImageStyle & {
  backgroundColor?: Color
  borderColor?: Color
  overlayColor?: Color
  tintColor?: Color
}

export type OwnTextStyle = TextStyle & {
  backgroundColor?: Color
  color?: Color
  fontFamily?: FontFamily
  fontSize?: FontSize
  fontWeight?: FontWeight
  textDecorationColor?: Color
  textShadowColor?: Color
}

export type OwnViewStyle = ViewStyle & {
  backgroundColor?: Color
  borderBlockColor?: Color
  borderBlockEndColor?: Color
  borderBlockStartColor?: Color
  borderBottomColor?: Color
  borderColor?: Color
  borderEndColor?: Color
  borderLeftColor?: Color
  borderRightColor?: Color
  borderStartColor?: Color
  borderTopColor?: Color
}

type NamedStyles<T> = { [P in keyof T]: OwnImageStyle | OwnTextStyle | OwnViewStyle }

export function createStyleSheet<T extends NamedStyles<T> | NamedStyles<any>> (styles: T | NamedStyles<T>): T {
  return StyleSheet.create(styles)
}
