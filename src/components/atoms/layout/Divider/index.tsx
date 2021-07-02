import React from 'react'
import { StyleSheet, View } from 'react-native'
import { secondaryColours } from '../../../shared/colors'
import { Spacer } from '../Spacer'

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: secondaryColours.grey02,
  },
})

export const Divider = (): JSX.Element => {
  return (
    <>
      <Spacer size="xxs" />
      <View style={styles.divider} />
      <Spacer size="xxs" />
    </>
  )
}
