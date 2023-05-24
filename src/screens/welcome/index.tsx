import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import * as Animatable from 'react-native-animatable'

export default function Welcome(): JSX.Element {
  const navigation = useNavigation()
  const handleItemClick = () => {
    navigation.navigate('Home')
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#62BAAC" />
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require('../../_assets/imgs/Logo.png')}
          style={{ width: '100%' }}
          resizeMode="contain"
        />
      </View>
      <Animatable.View
        style={styles.containerForm}
        delay={600}
        animation="fadeInUp"
      >
        <Text style={styles.title}>Precisando de ajuda?</Text>
        <Text style={styles.text}>
          Selecione a sua cidade e encontre os serviços disponíveis
        </Text>
        <TextInput style={styles.input} placeholder="Fortaleza, CE" />
        <TouchableOpacity style={styles.button} onPress={handleItemClick}>
          <Text style={styles.buttonText}>Pesquisar</Text>
        </TouchableOpacity>
      </Animatable.View>
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

  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cacaca',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginTop: 40,
    fontSize: 20,
  },
  button: {
    backgroundColor: '#62BAAC',
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
})
