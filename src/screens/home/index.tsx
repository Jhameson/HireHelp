import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Home({ navigation }: any): JSX.Element {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text>Tela de login </Text>
      <Button
        title="Algo"
        onPress={() => navigation.navigate('Profile')}
      ></Button>
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
