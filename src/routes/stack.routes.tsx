import { createStackNavigator } from '@react-navigation/stack'

import Service from '../screens/service'
import Home from '../screens/home'

const { Navigator, Screen } = createStackNavigator()

export function StackRoutes(): JSX.Element {
  return (
    <Navigator screenOptions={{}}>
      <Screen
        name="Serviço"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Service"
        component={Service}
        options={{
          title: 'Serviço',
        }}
      />
    </Navigator>
  )
}
