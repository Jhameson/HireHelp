import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import Search from '../../components/Search'
import List from '../../components/List'

export default function Home(): JSX.Element {
  // const navigation = useNavigation()
  // const handleClick = () => navigation.navigate('Profile')

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
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
  text: { marginVertical: 10 },
})
