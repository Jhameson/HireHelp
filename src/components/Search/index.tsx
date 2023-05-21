import React from 'react'
import { Button, Text, TextInput, View, Alert } from 'react-native'
import styles from './styles'

const Search = () => {
  const [text, onChangeText] = React.useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.titleSearch}>Pesquise por um serviço ou cidade:</Text>
      <TextInput
        style={styles.inputSearch}
        onChangeText={onChangeText}
        value={text}
        placeholder="Ex.: Eletricista"
      />
      <Button
        title="Pesquisar"
        color="#62BAAC"
        onPress={() => Alert.alert(text)}
      />
    </View>
  )
}
export default Search
