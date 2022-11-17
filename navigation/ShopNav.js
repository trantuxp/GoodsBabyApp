import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {Signin, Register, Homescreen, DetailProduct} from '../screens';

const Drawer = createDrawerNavigator();

const MystackSignin = () => {
  return (
    <Stack.Navigator
      initialRouterName="Signin"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Homescreen" component={Homescreen} />
    </Stack.Navigator>
  );
};

const MystackRegister = () => {
  return (
    <Stack.Navigator
      initialRouterName="Register"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Homescreen" component={Homescreen} />
    </Stack.Navigator>
  );
};

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouterName="Homescreen"
        screenOptions={{headerShown: true}}>
        <Drawer.Screen name="Homescreen" component={Homescreen} />
        <Drawer.Screen name="DetailProduct" component={DetailProduct} />

        {/* <Drawer.Screen name="Signin" component={Signin} />
        <Drawer.Screen name="Register" component={Register} /> */}
        <Drawer.Screen name="Signin" component={MystackSignin} />
        <Drawer.Screen name="Register" component={MystackRegister} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
