import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import SignupScreen from './screens/Signup';
import MainScreen from './screens/Main';
import Tabs from './navigation/Tabs';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" headerMode="none">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="signup" component={SignupScreen} />
        <Stack.Screen name="main" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
