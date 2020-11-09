import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MainScreen from '../screens/Main';
import MapsScreen from '../screens/Maps';
import DetailsEvents from '../screens/DetailsEvents';
const Tab = createBottomTabNavigator();
const MainStack = createStackNavigator();
const MainNav = () => {
  return (
    <MainStack.Navigator initialRouteName="home" headerMode="none">
      <MainStack.Screen component={MainScreen} name="home" />
      <MainStack.Screen component={DetailsEvents} name="details" />
    </MainStack.Navigator>
  );
};
const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#00BFA6',
      }}>
      <Tab.Screen
        name="List"
        component={MainNav}
        options={{
          tabBarLabel: 'Events',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="event-note" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={MapsScreen}
        options={{
          tabBarLabel: 'Incidents',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="fire" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
