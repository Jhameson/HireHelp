import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export default function Profile(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Perfil </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
