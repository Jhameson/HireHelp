import { NavigationContainer } from '@react-navigation/native'
import { StackRoutes } from './stack.routes'
import { StatusBar } from 'react-native'

export function Routes(): JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#62BAAC" />
      <StackRoutes />
    </NavigationContainer>
  )
}
