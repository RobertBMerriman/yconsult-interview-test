import React, { ReactNode } from 'react'
import { Text, StyleSheet } from 'react-native'
import { secondaryColours } from '../../../shared/colors'
import { baseTypographyStyle } from '../styles'

const styles = StyleSheet.create({
  text: {
    ...baseTypographyStyle,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.5,
  },
})

interface Props {
  children: ReactNode
  color?: string
}

export const TertiaryCtaText = ({
  children,
  color = secondaryColours.grey03,
}: Props): JSX.Element => {
  return <Text style={[styles.text, { color }]}>{children}</Text>
}
