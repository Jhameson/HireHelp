import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/home'

import { MaterialIcons } from '@expo/vector-icons'
import Profile from '../screens/profile'

const { Navigator, Screen } = createDrawerNavigator()

export function DrawerRoutes(): JSX.Element {
  return (
    <Navigator screenOptions={{}}>
      <Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: 'Início',
          title: 'Hire Help',
          headerStyle: {
            backgroundColor: '#62BAAC',
          },
          drawerIcon: () => <MaterialIcons name="home" size={25} />,
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Perfil',
          headerStyle: {
            backgroundColor: '#2CAAB8',
          },
          drawerIcon: () => (
            <MaterialIcons
              name="admin-panel-settings"
              size={25}
              style={{ color: '#ff0000' }}
            />
          ),
        }}
      />
    </Navigator>
  )
}
