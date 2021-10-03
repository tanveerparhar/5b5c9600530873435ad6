import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import CountryScreen from './src/screens/CountryScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Country: CountryScreen,
  },
  {
    initialRouteName: 'Country',
  }
);

export default createAppContainer(navigator);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
