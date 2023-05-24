import { NavigationContainer } from '@react-navigation/native'
import { StackRoutes } from './stack.routes'
import { StatusBar } from 'react-native'

export function Routes(): JSX.Element {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  )
}
