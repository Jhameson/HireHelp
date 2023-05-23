import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function Welcome(): JSX.Element {
  const navigation = useNavigation()
  const handleItemClick = () => {
    navigation.navigate('Home')
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerSec}>
        {/* <Button title="teste" onPress={handleItemClick}></Button> */}
        <Text>Precisando de ajuda?</Text>
        <Text>Selecione a sua cidade e encontre os serviços disponíveis</Text>
        <TextInput style={styles.input}></TextInput>
        <Button title="teste" onPress={handleItemClick}></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#62BAAC',
  },
  containerSec: {
    height: '50%',
    marginTop: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  text: { marginVertical: 30 },
  input: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
})
