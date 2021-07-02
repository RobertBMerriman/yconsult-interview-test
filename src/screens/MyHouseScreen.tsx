import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { H3 } from '../components/atoms/typography/Headers'
import { primaryColours } from '../components/shared/colors'

const styles = StyleSheet.create({
  otherServices: {
    backgroundColor: primaryColours.richPurple,
  },
})

export const MyHouseScreen = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <H3>My house</H3>

        <View>
          <H3>Your active services</H3>
        </View>

        <View style={styles.otherServices}>
          <H3 light>Our other services</H3>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}
