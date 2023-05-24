import { useNavigation } from '@react-navigation/native'
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

export default function Welcome(): JSX.Element {
  const navigation = useNavigation()
  const handleItemClick = () => {
    navigation.navigate('Home')
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image
          source={require('../../_assets/imgs/Logo.png')}
          style={{ width: '100%' }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.containerForm}>
        <Text style={styles.title}>Precisando de ajuda?</Text>
        <Text style={styles.text}>
          Selecione a sua cidade e encontre os serviços disponíveis
        </Text>
        {/* <TextInput style={styles.input}></TextInput> */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Pesquisar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#62BAAC',
  },
  containerLogo: {
    flex: 1,
    backgroundColor: '#62BAAC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm: {
    flex: 0.9,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: '5%',
  },
  title: { fontSize: 24, fontWeight: 'bold', marginVertical: 28 },
  text: {
    color: '#a1a1a1',
  },
  button: {
    position: 'absolute',
    backgroundColor: '#62BAAC',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  input: {
    // borderWidth: 1,
    // paddingVertical: 10,
    // paddingHorizontal: 10,
    // borderRadius: 20,
  },
})
