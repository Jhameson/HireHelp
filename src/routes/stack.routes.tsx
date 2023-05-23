import { createStackNavigator } from '@react-navigation/stack'

import Service from '../screens/service'
import Home from '../screens/home'
import Welcome from '../screens/welcome'

const { Navigator, Screen } = createStackNavigator()

export function StackRoutes(): JSX.Element {
  return (
    <Navigator screenOptions={{}}>
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
          // drawerIcon: () => <MaterialIcons name="home" size={25} />,
        }}
      />
    </Navigator>
  )
}
