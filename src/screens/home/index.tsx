import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'

export default function Home(): JSX.Element {
  const navigation = useNavigation()

  const handleClick = () => navigation.navigate('Profile')

  const [text, onChangeText] = React.useState('')
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.label}>Pesquise por uma cidade: </Text>
      <View style={styles.groupSearch}>
        <TextInput
          style={styles.inputSearch}
          onChangeText={onChangeText}
          value={text}
          placeholder="Ex.: Crateús, CE"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 2,
  },
  inputSearch: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  label: {},
  groupSearch: {
    display: 'flex',
    flexDirection: 'column',
  },
})
