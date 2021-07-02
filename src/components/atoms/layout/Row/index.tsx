import React, { ReactNode } from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

interface Props {
  children: ReactNode
  style?: StyleProp<ViewStyle>
}

export const Row = ({ children, style }: Props): JSX.Element => {
  return <View style={[styles.row, style]}>{children}</View>
}
