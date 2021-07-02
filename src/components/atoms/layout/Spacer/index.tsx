/* eslint-disable react-native/no-unused-styles */
import React from 'react'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  xxxxs: { minHeight: 2 },
  xxxs: { minHeight: 4 },
  xxs: { minHeight: 8 },
  xs: { minHeight: 12 },
  s: { minHeight: 16 },
  sm: { minHeight: 24 },
  m: { minHeight: 32 },
  ml: { minHeight: 40 },
  l: { minHeight: 48 },
  xl: { minHeight: 56 },
  xxl: { minHeight: 64 },
})

interface Props {
  size: keyof typeof styles
}

export const Spacer = ({ size }: Props): JSX.Element => {
  return <View style={styles[size]} />
}
