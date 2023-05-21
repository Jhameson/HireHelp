import 'react-native-gesture-handler'

import { AppRegistry } from 'react-native'

import { expo as appName } from './app.json'
import { Routes } from './src/routes'

AppRegistry.registerComponent(appName.name, () => App)

export default function App(): JSX.Element {
  return <Routes />
}
