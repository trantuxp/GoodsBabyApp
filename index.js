/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import starRacing from './compoments/starRacing';
import {
  Signin,
  register,
  ProductItem,
  ProductList,
  Product2Item,
  Cart,
  taskbar,
  Payment,
  About,
} from './screens';
import Comment from './compoments/Comment';
import MainNavigator from './navigation/ShopNav';
import Getapi_Flatlist from './Callapi/Getapi_Flatlist';
import AdminNav from './admin/AdminNav';

AppRegistry.registerComponent(appName, () => App);
