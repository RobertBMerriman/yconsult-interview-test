import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Card } from '../components/atoms/layout/Card'
import { Spacer } from '../components/atoms/layout/Spacer'
import { CtaText } from '../components/atoms/typography/CtaText'
import { TertiaryCtaText } from '../components/atoms/typography/CtaText/tertiary'
import { H3 } from '../components/atoms/typography/Headers'
import { P } from '../components/atoms/typography/Paragraph'
import { nonBrandColours, primaryColours } from '../components/shared/colors'
import { HouseService, PortalService } from '../services/portal'

const styles = StyleSheet.create({
  header: {
    padding: 16,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: nonBrandColours.grey015,
  },
  services: {
    padding: 16,
  },
  otherServices: {
    padding: 16,
    backgroundColor: primaryColours.richPurple,
  },
})

export const MyHouseScreen = () => {
  // Scenarios 1 - 8
  const SCENARIO = 1

  const [services, setServices] = useState<HouseService[]>()
  const [loading, setLoading] = useState(false)

  // console.log({ services })

  useEffect(() => {
    setLoading(true)
    PortalService.houseServices(SCENARIO)
      .then((houseServices) => {
        setLoading(false)
        setServices(houseServices.services)
      })
      .catch((e) => {
        setLoading(false)
        console.error(e)
      })
  }, [])

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.header}>
          <H3>My house</H3>
        </View>

        {/* Component for House details and tenants would be here */}

        {/* <Your code here!> */}

        <View style={styles.services}>
          <H3>Your active services</H3>
          <Spacer size="s" />
          <Card>
            <P>Example card here!</P>

            <TertiaryCtaText>Example</TertiaryCtaText>
            <CtaText size="s">Example</CtaText>
            <CtaText size="s" light>
              Example
            </CtaText>
          </Card>
        </View>

        <View style={styles.otherServices}>
          <H3 light>Our other services</H3>
        </View>

        {/* </Your code here!> */}

        {/* Component for 'Related articles' would be here */}
      </SafeAreaView>
    </ScrollView>
  )
}
