import { NavigationContainer } from '@react-navigation/native'
import { DrawerRoutes } from './drawer.routes'
import { StackRoutes } from './stack.routes'

export function Routes(): JSX.Element {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  )
}
