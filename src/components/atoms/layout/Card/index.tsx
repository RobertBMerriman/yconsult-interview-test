import React, { ReactNode } from 'react'
import { StyleSheet, ViewStyle, StyleProp, Pressable } from 'react-native'
import { nonBrandColours, primaryColours } from '../../../shared/colors'

const styles = StyleSheet.create({
  card: {
    backgroundColor: primaryColours.snowWhite,
    borderRadius: 6,
    padding: 16,
  },
  // TODO Elevation -> shadow converter util func
  shadow: {
    shadowColor: nonBrandColours.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
})

interface Props {
  children: ReactNode
  noShadow?: boolean
  style?: StyleProp<ViewStyle>
  onPress?: () => void
}

export const Card = ({
  children,
  noShadow,
  style,
  onPress,
}: Props): JSX.Element => {
  return (
    <Pressable
      style={[styles.card, !noShadow && styles.shadow, style]}
      onPress={onPress}
    >
      {children}
    </Pressable>
  )
}
