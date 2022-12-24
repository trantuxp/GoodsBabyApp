import {Text, StyleSheet, View, FlatList} from 'react-native';
import React, {Component, useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Signin from './Signin';
import Slide from '../compoments/Slide';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, fontsize, CallURL} from '../constant';
import ProductList from './ProductLists/ProductList';
import Taskbar from './Taskbar';
import axios from 'axios';
import Product2Item from './ProductLists/Product2Item';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function Homescreen(props) {
  const [data, setdata] = useState([]);

  useEffect(() => {
    calGetUrl();
  }, [data]);

  const calGetUrl = async () => {
    axios
      .get(CallURL.URL_spmoinhat)

      .then(res => {
        // console.log(typeof res.data.data);
        setdata(res.data.data);
        // console.log(JSON.stringify(res.data.data));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  const navigation = useNavigation();
  const [username, setusername] = useState('');
  const [password, setpassword] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem('username').then(result => {
      setusername('');
    });
    AsyncStorage.getItem('password').then(result => {
      setpassword('');
    });
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 10,
        }}>
        <Taskbar navigation={navigation} title="Home" user="anhtu" />
      </View>
      <View
        style={{
          flex: 30,
        }}>
        <Slide></Slide>
      </View>
      <View style={{flex: 60}}>
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
          <View
            style={{
              paddingTop: 20,
              flex: 1,
              backgroundColor: colors.white,
            }}>
            <FlatList
              numColumns={2}
              data={data}
              key={data.id}
              renderItem={({item}) => (
                <Product2Item navigation={navigation} data={item} />
              )}
            />
          </View>
        </View>
        {/* {username != null
          ? console.log(`mail: ${username},password: ${password}`)
          : null} */}
        {/* //dang xuat */}
        {/* <Text>Username: {username}</Text>
        <Text>Password: {password}</Text>*/}
        {/* <TouchableOpacity
          style={{
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
