import { createStackNavigator } from '@react-navigation/stack'

import Service from '../screens/service'
import Home from '../screens/home'
import Welcome from '../screens/welcome'

const { Navigator, Screen } = createStackNavigator()

export function StackRoutes(): JSX.Element {
  return (
    <Navigator
      screenOptions={{
        gestureEnabled: true,
        headerMode: 'float',
      }}
    >
      <Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{
          title: 'Hire Help',
          headerStyle: {
            backgroundColor: '#62BAAC',
          },
        }}
      />
      <Screen
        name="Service"
        component={Service}
        options={{
          title: 'Serviço',
          headerStyle: {
            backgroundColor: '#FFA17A',
          },
          // drawerIcon: () => <MaterialIcons name="home" size={25} />,
        }}
      />
    </Navigator>
  )
}
