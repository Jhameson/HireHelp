import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import Search from '../../components/Search'
import List from '../../components/List'

export default function Home(): JSX.Element {
  return (
    <View style={styles.container}>
      <Search />
      <Text style={styles.text}>Ou selecione um serviço:</Text>
      <List />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  text: { marginVertical: 30 },
})
