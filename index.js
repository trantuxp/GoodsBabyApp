/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {
  login,
  register,
  ProductItem,
  ProductList,
  Product2Item,
} from './screens';
import Getapi_Flatlist from './Callapi/Getapi_Flatlist';

AppRegistry.registerComponent(appName, () => Getapi_Flatlist);
