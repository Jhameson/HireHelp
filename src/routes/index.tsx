import { NavigationContainer } from '@react-navigation/native'
import { StackRoutes } from './stack.routes'

export function Routes(): JSX.Element {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  )
}
