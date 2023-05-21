import { NavigationContainer } from '@react-navigation/native'
import { DrawerRoutes } from './drawer.routes'

export function Routes(): JSX.Element {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  )
}
