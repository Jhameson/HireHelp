import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import Home from './src/screens/home'

import Profile from './src/screens/profile'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

function StackApp(): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'black' },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Awesome app',
        }}
      />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StackApp />
    </NavigationContainer>
  )
}
