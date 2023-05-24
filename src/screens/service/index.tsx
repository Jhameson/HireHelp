import { useNavigation } from '@react-navigation/native'
import {
  Button,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

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

export default function Service(): JSX.Element {
  const Separator = () => <View style={styles.separator} />
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Text>teste</Text>
      <Text>teste</Text>
      <Text>teste</Text>
      <Text>teste</Text>
      <FlatList
        data={DATA}
        ItemSeparatorComponent={Separator}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#ebebeb',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  item: {
    backgroundColor: '#f4f4f4',
    // backgroundColor: '#ff0000',
    padding: 20,
    height: 120,
  },
  title: {
    fontSize: 20,
  },
})
