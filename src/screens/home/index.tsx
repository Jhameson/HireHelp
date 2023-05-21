import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'

export default function Home(): JSX.Element {
  const navigation = useNavigation()

  const handleClick = () => navigation.navigate('Profile')

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Tela de login </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CF7400',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
