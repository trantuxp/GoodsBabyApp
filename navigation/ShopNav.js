import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import {
  Signin,
  Register,
  Homescreen,
  DetailProduct,
  Cart,
  DrawerContent,
  Product2Item,
} from '../screens';

const Drawer = createDrawerNavigator();

const MystackSignin = () => {
  return (
    <Stack.Navigator
      initialRouterName="Signin"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Signin" component={Signin} />
      <Drawer.Screen name="DetailProduct" component={DetailProduct} />
      <Stack.Screen name="Homescreen" component={Homescreen} />
      <Drawer.Screen name="Product2Item" component={Product2Item} />
    </Stack.Navigator>
  );
};

const MystackRegister = () => {
  return (
    <Stack.Navigator
      initialRouterName="Register"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Register" component={Register} />
      <Drawer.Screen name="DetailProduct" component={DetailProduct} />
      <Stack.Screen name="Homescreen" component={Homescreen} />
      <Drawer.Screen name="Product2Item" component={Product2Item} />
    </Stack.Navigator>
  );
};

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouterName="Homescreen"
        screenOptions={{headerShown: false}}
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Homescreen" component={Homescreen} />
        <Drawer.Screen name="DetailProduct" component={DetailProduct} />
        <Drawer.Screen name="Cart" component={Cart} />
        {/* <Drawer.Screen name="Signin" component={Signin} />
        <Drawer.Screen name="Register" component={Register} /> */}
        <Drawer.Screen name="Signin" component={MystackSignin} />
        <Drawer.Screen name="Register" component={MystackRegister} />
        <Drawer.Screen name="Product2Item" component={Product2Item} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
