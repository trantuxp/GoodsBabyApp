import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {colors} from '../constant';
import AdminNav from '../admin/AdminNav';
import {
  Signin,
  Register,
  Homescreen,
  DetailProduct,
  Cart,
  DrawerContent,
  Product2Item,
  Payment,
  About,
  ProductList,
  News,
} from '../screens';
import {
  Getapi_Flatlist,
  ManagerAccount,
  AdminScreen,
  ManagerNews,
  ManagerShop,
  ManagerOrder,
  AddProduct,
} from '../admin';
const Drawer = createDrawerNavigator();

const MystackSignin = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Homescreen" component={Homescreen} />
      <Drawer.Screen name="Product2Item" component={Product2Item} />
      <Drawer.Screen name="Payment" component={Payment} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="ProductList" component={ProductList} />
      <Drawer.Screen name="News" component={News} />
      <Drawer.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

const MystackRegister = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Register" component={Register} />
      <Drawer.Screen name="DetailProduct" component={DetailProduct} />
      <Drawer.Screen name="Homescreen" component={Homescreen} />
      <Drawer.Screen name="Product2Item" component={Product2Item} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="ProductList" component={ProductList} />
      <Drawer.Screen name="News" component={News} />
    </Stack.Navigator>
  );
};

const MystackAdmin = () => {
  return (
    <Stack.Navigator
      headerStyle
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.primary,
        },
      }}>
      <Drawer.Screen name="Admin" component={AdminScreen} />
      <Drawer.Screen name="ManagerProduct" component={Getapi_Flatlist} />
      <Drawer.Screen name="ManagerAccount" component={ManagerAccount} />
      <Drawer.Screen name="ManagerOrder" component={ManagerOrder} />
      <Drawer.Screen name="ManagerShop" component={ManagerShop} />
      <Drawer.Screen name="AddProduct" component={AddProduct} />
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
        <Drawer.Screen name="Signin" component={Signin} />
        {/* <Drawer.Screen name="Signin" component={Signin} />
        <Drawer.Screen name="Register" component={Register} /> */}
        <Drawer.Screen name="MystackSignin" component={MystackSignin} />
        <Drawer.Screen name="MystackRegister" component={MystackRegister} />
        <Drawer.Screen name="MystackAdmin" component={MystackAdmin} />
        <Drawer.Screen name="Product2Item" component={Product2Item} />
        <Drawer.Screen name="Payment" component={Payment} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="ProductList" component={ProductList} />
        <Drawer.Screen name="News" component={News} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
