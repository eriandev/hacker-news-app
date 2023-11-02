import { Text as TextNative, type TextProps as TextNativeProps } from 'react-native'
import { baseFontStyle, useLoadFonts } from '@/theme/fonts'

export type TextProps = TextNativeProps

export function Text ({ children, style }: TextProps): React.JSX.Element {
  const [fontsLoaded, fontError] = useLoadFonts()

  if (!fontsLoaded && (fontError == null)) {
    return (
      <TextNative style={{ ...baseFontStyle, fontFamily: undefined }}>
        {children}
      </TextNative>
    )
  }

  return (
    <TextNative style={[baseFontStyle, style]}>
      {children}
    </TextNative>
  )
}
