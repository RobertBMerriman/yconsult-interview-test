import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { primaryColours, secondaryColours } from '../../../shared/colors'
import { baseTypographyStyleBold } from '../styles'

export const styles = StyleSheet.create({
  h1: {
    ...baseTypographyStyleBold,
    fontSize: 70,
    lineHeight: 84,
    letterSpacing: -3.63,
  },
  h2: {
    ...baseTypographyStyleBold,
    fontSize: 58,
    lineHeight: 72,
    letterSpacing: -4,
  },
  h3: {
    ...baseTypographyStyleBold,
    fontSize: 30,
    lineHeight: 37,
    letterSpacing: -2,
  },
  h4: {
    ...baseTypographyStyleBold,
    fontSize: 22,
    lineHeight: 30,
    letterSpacing: -1,
  },
  h5: {
    ...baseTypographyStyleBold,
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: -0.5,
  },
  grey: {
    color: secondaryColours.grey03,
  },
  light: {
    color: primaryColours.snowWhite,
  },
})

interface Props {
  children: string | string[]
  grey?: boolean
  light?: boolean
}

export const H1 = ({ children, grey, light }: Props): JSX.Element => {
  return (
    <Text style={[styles.h1, grey && styles.grey, light && styles.light]}>
      {children}
    </Text>
  )
}

export const H2 = ({ children, grey, light }: Props): JSX.Element => {
  return (
    <Text style={[styles.h2, grey && styles.grey, light && styles.light]}>
      {children}
    </Text>
  )
}

export const H3 = ({ children, grey, light }: Props): JSX.Element => {
  return (
    <Text style={[styles.h3, grey && styles.grey, light && styles.light]}>
      {children}
    </Text>
  )
}

export const H4 = ({ children, grey, light }: Props): JSX.Element => {
  return (
    <Text style={[styles.h4, grey && styles.grey, light && styles.light]}>
      {children}
    </Text>
  )
}

export const H5 = ({ children, grey, light }: Props): JSX.Element => {
  return (
    <Text style={[styles.h5, grey && styles.grey, light && styles.light]}>
      {children}
    </Text>
  )
}
