import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/home'
import Profile from '../Profile'

const { Navigator, Screen } = createDrawerNavigator()

export function DrawerRoutes(): JSX.Element {
  return (
    <Navigator
      screenOptions={
        {
          // headerShown: false,
        }
      }
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          title: 'Hire Help',
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Perfil',
        }}
      />
    </Navigator>
  )
}
