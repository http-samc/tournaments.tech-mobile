import React, { useState, useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import axios from 'axios';

import Colors from './theme/colors'
import Styles from './theme/styles'

import Leaderboard from './screens/Leaderboard'
import Team from './screens/Team'
import Search from './screens/Search'
import About from './screens/About'
import Bids from './screens/Bids';

Notifications.setNotificationHandler({ handleNotification: async () => ({ shouldShowAlert: true, shouldPlaySound: false, shouldSetBadge: false, }) });
async function registerForPushNotificationsAsync() { let token; if (Constants.isDevice) { const { status: existingStatus } = await Notifications.getPermissionsAsync(); let finalStatus = existingStatus; if (existingStatus !== 'granted') { const { status } = await Notifications.requestPermissionsAsync(); finalStatus = status; } token = (await Notifications.getExpoPushTokenAsync()).data; } else { console.log('Must use physical device for Push Notifications'); } if (Platform.OS === 'android') { Notifications.setNotificationChannelAsync('default', { name: 'default', importance: Notifications.AndroidImportance.MAX, vibrationPattern: [0, 250, 250, 250], lightColor: '#FF231F7C', }); } return token; }

const Tab = createBottomTabNavigator();

export default function App() {
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    if (Constants.isDevice && Platform.OS !== 'web') {
      registerForPushNotificationsAsync().then(token => {
        axios.post(`https://nativenotify.com/api/expo/key`, { appId: 636, appToken: 'dk5bypNdgvtP4EjTKe3OZl', expoToken: token })
      });
      responseListener.current = Notifications.addNotificationResponseReceivedListener(response => console.log(response));
      return () => { Notifications.removeNotificationSubscription(notificationListener); Notifications.removeNotificationSubscription(responseListener); };
    }
  })

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
            "Team",
            "Browser"
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
        <Tab.Screen options={{ headerShown: false }} name="Bids" component={Bids} />
        <Tab.Screen options={{ headerShown: false }} name="About" component={About} />
        <Tab.Screen options={{ headerShown: false }} name="Team" component={Team} />
      </Tab.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  )
}