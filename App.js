/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MainNavigator from './navigation/ShopNav';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {Signin, Register, Homescreen, DetailProduct, Cart} from './screens';
import DrawerContent from './screens/DrawerContent';
import Screentest from './screens/Screentest';

const Drawer = createDrawerNavigator();
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

function App() {
  // return (
  //   <NavigationContainer>
  //     <Drawer.Navigator
  //       // initialRouterName="Homescreen"
  //       // screenOptions={{headerShown: false}}
  //       >
  //       <Drawer.Screen name="Screentest" component={Screentest} />
  //       <Drawer.Screen name="Cart" component={Cart} />
  //     </Drawer.Navigator>
  //   </NavigationContainer>
  // );
  return <MainNavigator></MainNavigator>;
}

const styles = StyleSheet.create({});

export default App;
