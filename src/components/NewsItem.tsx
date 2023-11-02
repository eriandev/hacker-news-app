import { Text, View } from 'react-native'
import { Swipeable } from 'react-native-gesture-handler'

import { color } from '@/theme/colors'
import { Title } from '@/components/Title'
import { Label } from '@/components/Label'
import { createStyleSheet } from '@/theme/style'
import { DeleteAction } from '@/components/DeleteAction'
import type { FormattedNewsToShow } from '@/viewmodels/types/homeView'

export type NewsItemProps = FormattedNewsToShow

export function NewsItem ({
  id,
  link,
  title,
  author,
  haveLink,
  createdAt,
  displayLink
}: FormattedNewsToShow): React.JSX.Element {
  return (
    <Swipeable renderRightActions={DeleteAction}>
      <View style={styles.container}>
        {haveLink ? <Label>{displayLink}</Label> : null}
        <Title>{title}</Title>
        <Text style={styles.footer}>{author} — {createdAt}</Text>
      </View>
    </Swipeable>
  )
}

const styles = createStyleSheet({
  container: {
    rowGap: 6,
    display: 'flex',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: color('white')
  },
  title: {
    fontSize: 16
  },
  footer: {
    fontSize: 10,
    marginTop: 6,
    color: color('gray')
  }
})
