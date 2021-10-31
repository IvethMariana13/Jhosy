import React from 'react'

import HomeScreen from './pages/Home';
import {InputScreen} from './pages/input';
import ListScreen from './pages/list';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator     screenOptions = {({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          //iconName = focused
            iconName = 'ios-home'
        } else if (route.name === 'List') {
          iconName = "ios-list";
        } else if (route.name === 'Input') {
          iconName = "ios-add";
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor:"pink",
        tabBarInactiveTintColor:"grey",
      
    })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Input" component={InputScreen} />
        <Tab.Screen name="List" component={ListScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}