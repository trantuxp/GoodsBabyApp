import {Text, StyleSheet, View} from 'react-native';
import React, {Component, useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Signin from './Signin';
import Slide from '../compoments/Slide';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, fontsize} from '../constant';
import ProductList from './ProductLists/ProductList';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function Homescreen(props) {
  const navigation = useNavigation();
  const [username, setusername] = useState([]);
  const [password, setpassword] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem('username').then(result => {
      setusername(result);
    });
    AsyncStorage.getItem('password').then(result => {
      setpassword(result);
    });
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 30,
        }}>
        <Slide></Slide>
      </View>
      <View style={{flex: 70}}>
        <View
          style={{
            flex: 10,
            backgroundColor: colors.primary,

            justifyContent: 'center',
          }}>
          <Text style={{fontSize: fontsize.h3, color: 'white'}}>
            Sản phẩm mới nhất
          </Text>
        </View>
        <View style={{flex: 90}}>
          <ProductList navigation={navigation} />
        </View>
        {username != null && alert(`mail: ${username},password: ${password}`)}
        {/* <Text>Username: {username}</Text>
        <Text>Password: {password}</Text>
        <TouchableOpacity
          style={{SIGNNIN
            backgroundColor: 'gray',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%',
          }}
          onPress={() => {
            AsyncStorage.clear();
            navigation.replace('Signin');
          }}>
          <Text>Logout</Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
