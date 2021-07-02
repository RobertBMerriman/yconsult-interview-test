/* eslint-disable react-native/no-unused-styles */
import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { primaryColours } from '../../../shared/colors'
import { ButtonSize } from '../../../shared/types'
import { baseTypographyStyleBold } from '../styles'

const styles = StyleSheet.create({
  text: {
    ...baseTypographyStyleBold,
    letterSpacing: -0.75,
  },
  light: {
    color: primaryColours.snowWhite,
  },
  s: {
    fontSize: 14,
    lineHeight: 20,
  },
  m: {
    fontSize: 16,
    lineHeight: 24,
  },
  l: {
    fontSize: 18,
    lineHeight: 24,
  },
  fullWidth: {
    fontSize: 16,
    lineHeight: 24,
  },
  center: {
    textAlign: 'center',
  },
})

interface Props {
  children: string | string[]
  light?: boolean
  size?: ButtonSize
  center?: boolean
}

export const CtaText = ({
  children,
  light = false,
  size = 'm',
  center = false,
}: Props): JSX.Element => {
  return (
    <Text
      style={[
        styles.text,
        light && styles.light,
        styles[size],
        center && styles.center,
      ]}
    >
      {children}
    </Text>
  )
}
