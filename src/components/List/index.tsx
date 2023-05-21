import { useNavigation } from '@react-navigation/native'
import {
  Alert,
  Button,
  FlatList,
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

type ItemProps = { title: string }

const List = () => {
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const Item = ({ title }: ItemProps) => {
  const navigation = useNavigation()
  const handleItemClick = (title: string) => {
    navigation.navigate('Service')
  }
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => handleItemClick(title)}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#C3FCF1',
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
  },
})

export default List
