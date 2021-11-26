import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'

import Leaderboard from './screens/Leaderboard'
import Team from './screens/Team'
import Search from './screens/Search'
import About from './screens/About'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Leaderboard" component={Leaderboard} />
        <Stack.Screen options={{ headerShown: false }} name="Team" component={Team} />
        <Stack.Screen options={{ headerShown: false }} name="Search" component={Search} />
        <Stack.Screen options={{ headerShown: false }} name="About" component={About} />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  )
}