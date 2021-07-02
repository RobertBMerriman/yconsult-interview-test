/* eslint-disable react-native/no-unused-styles */
import React from 'react'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  xxxs: { minWidth: 4 },
  xxs: { minWidth: 8 },
  xs: { minWidth: 12 },
  s: { minWidth: 16 },
  sm: { minWidth: 24 },
  m: { minWidth: 32 },
  ml: { minWidth: 40 },
  l: { minWidth: 48 },
  xl: { minWidth: 56 },
})

interface Props {
  size: keyof typeof styles
}

export const HSpacer = ({ size }: Props): JSX.Element => {
  return <View style={styles[size]} />
}
