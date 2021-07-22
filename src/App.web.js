import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './home/Home'
import Header from './Header'
import { createStore } from 'redux'
import { accountReducer } from './reducers'
import { Provider } from 'react-redux'
import { createDrawerNavigator } from '@react-navigation/drawer'

const store = createStore(accountReducer)

// const isNative = Platform.OS !== 'web';
// const Stack = createStackNavigator()
const Stack = createStackNavigator()
const App = () => {
  // const isDarkMode = useColorScheme() === 'dark'

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          // screen간 공유되는 옵션
          screenOptions={{
            headerTitle: Header
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
