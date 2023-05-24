import React from 'react'
import {
  Alert,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import Search from '../../components/Search'
import { useNavigation } from '@react-navigation/native'

const DATA = [
  {
    id: '1',
    title: 'Babá',
  },
  {
    id: '2',
    title: 'Eletricista',
  },
  {
    id: '3',
    title: 'Carpiteiro',
  },
  {
    id: '4',
    title: 'Soldador',
  },
  {
    id: '5',
    title: 'Limpeza',
  },
  {
    id: '6',
    title: 'b Item',
  },
  {
    id: '7',
    title: 'Third Item',
  },
]

export default function Home(): JSX.Element {
  const navigation = useNavigation()
  const handleItemClick = () => navigation.navigate('Service')

  const [text, onChangeText] = React.useState('')

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View>
        <Text style={styles.titleSearch}>
          Pesquise por um serviço em{' '}
          <Text style={styles.textCity}>Fortaleza, CE:</Text>
        </Text>
        <TextInput
          style={styles.inputSearch}
          onChangeText={onChangeText}
          value={text}
          placeholder="Ex.: Eletricista"
        />
        <TouchableOpacity
          onPress={() => Alert.alert('text')}
          style={styles.btnSearch}
        >
          <Text style={{ color: '#fff' }}>Pesquisar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Ou selecione algum serviço disponível:</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={handleItemClick}>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  textCity: {
    fontWeight: 'bold',
  },
  text: { marginVertical: 30 },
  item: {
    backgroundColor: '#C3FCF1',
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
  },
  btnSearch: {
    backgroundColor: '#6B64AB',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignSelf: 'flex-end',
    borderRadius: 10,
  },
  inputSearch: {
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#c4c4c4',
    marginTop: 30,
    marginBottom: 20,
  },
  titleSearch: {
    fontSize: 15,
  },
  containerInput: {},
})
