import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DetailProduct from '../screens/DetailProduct';
import Homescreen from '../screens/Homescreen';
import {ProductList} from '../screens';
import {Signin} from '../screens';
import {Register} from '../screens';
const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Homescreen" component={Homescreen} />
      <Stack.Screen name="DetailProduct" component={DetailProduct} />
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  );
};
export default MainNavigator;
