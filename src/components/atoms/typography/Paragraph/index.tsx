import React, { ReactNode } from 'react'
import { Text, StyleSheet } from 'react-native'
import { primaryColours, secondaryColours } from '../../../shared/colors'
import { baseTypographyStyle, baseTypographyStyleBold } from '../styles'

const styles = StyleSheet.create({
  body: {
    ...baseTypographyStyle,
  },
  heading: {
    ...baseTypographyStyleBold,
  },
  common: {
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -1,
  },
  grey: {
    color: secondaryColours.grey04,
  },
  light: {
    color: primaryColours.snowWhite,
  },
  center: {
    textAlign: 'center',
  },
})

interface Props {
  children: ReactNode
  grey?: boolean
  light?: boolean
  center?: boolean
}

export const P = ({ children, grey, light, center }: Props): JSX.Element => {
  return (
    <Text
      style={[
        styles.body,
        styles.common,
        grey && styles.grey,
        light && styles.light,
        center && styles.center,
      ]}
    >
      {children}
    </Text>
  )
}

export const H = ({ children, grey, light, center }: Props): JSX.Element => {
  return (
    <Text
      style={[
        styles.heading,
        styles.common,
        grey && styles.grey,
        light && styles.light,
        center && styles.center,
      ]}
    >
      {children}
    </Text>
  )
}
