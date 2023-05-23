import { useNavigation } from '@react-navigation/native'
import { Button, Text, View } from 'react-native'

export default function Service(): JSX.Element {
  const navigation = useNavigation()
  const handleItemClick = () => {
    navigation.navigate('Profile')
  }
  return (
    <View>
      <Text>teste</Text>
      <Button title="teste" onPress={handleItemClick}></Button>
    </View>
  )
}
