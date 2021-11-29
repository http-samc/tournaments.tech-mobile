import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons';

import Colors from './theme/colors'
import Styles from './theme/styles'

import Leaderboard from './screens/Leaderboard'
import Team from './screens/Team'
import Search from './screens/Search'
import About from './screens/About'
import Bids from './screens/Bids';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let icon
            let rn = route.name

            if (rn === "Leaderboard")
              icon = focused ? 'home' : 'home-outline'
            else if (rn == "Search")
              icon = focused ? 'search' : 'search-outline'
            else if (rn == "About")
              icon = focused ? 'information-circle' : 'information-circle-outline'
            else if (rn == "Bids")
              icon = focused ? 'trophy' : 'trophy-outline'

            return <Ionicons name={icon} size={24} color={Colors.primary} />
          },
          tabBarButton: [
            "Team"
          ].includes(route.name)
            ? () => {
              return null
            }
            : undefined,
          tabBarShowLabel: false,
          tabBarStyle: Styles.navBar
        })
        }
        initialRouteName={"Leaderboard"}
      >
        <Tab.Screen options={{ headerShown: false }} name="Search" component={Search} />
        <Tab.Screen options={{ headerShown: false }} name="Leaderboard" component={Leaderboard} />
        <Tab.Screen options={{ headerShown: false }} name="About" component={About} />
        <Tab.Screen options={{ headerShown: false }} name="Bids" component={Bids} />
        <Tab.Screen options={{ headerShown: false }} name="Team" component={Team} />
      </Tab.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  )
}