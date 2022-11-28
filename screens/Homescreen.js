import {Text, StyleSheet, View, FlatList} from 'react-native';
import React, {Component, useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Signin from './Signin';
import Slide from '../compoments/Slide';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, fontsize} from '../constant';
import ProductList from './ProductLists/ProductList';
import Taskbar from './Taskbar';
import Product2Item from './ProductLists/Product2Item';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function Homescreen(props) {
  const [products, setproducts] = useState([
    {
      name: 'Banh gao lut huu co 1',
      amount: '100',
      price: '72.000 ',
      detail:
        'Bánh gạo lứt hữu cơ Bebedang phô mai bí đỏ hình que (Trên 6 tháng)',
      imageUrl:
        'https://media.bibomart.com.vn/resize.460x-/media/catalog/product/b/a/banh-gao-lut-huu-co-pho-mai-bi-do-hinh-que.jpg',
    },
    {
      name: 'Bot an dam',
      amount: '50',
      price: '165.000 ',
      detail: 'Bột ăn dặm Heinz súp lơ, bông cải, phô mai 200g (Trên 6 tháng)',
      imageUrl:
        'https://media.bibomart.com.vn/resize.460x-/media/catalog/product/c/h/chao-heinz-bong-cai-sup-lo-pho-mai_1.jpg',
    },
    {
      name: 'banh an dam',
      amount: '20',
      price: '68.000 ',
      detail: 'Bánh ăn dặm Pigeon vị rong biển 13366 (Trên 6 tháng)',
      imageUrl:
        'https://media.bibomart.com.vn/resize.460x-/media/catalog/product/b/a/banh-gao-lut-huu-co-pho-mai-bi-do-hinh-que.jpg',
    },
    {
      name: 'Banh gao lut huu co 2',
      amount: '0',
      price: '72.000 ',
      detail:
        'Bánh gạo lứt hữu cơ Bebedang phô mai bí đỏ hình que (Trên 6 tháng)',
      imageUrl:
        'https://media.bibomart.com.vn/resize.460x-/media/catalog/product/b/a/banh-gao-lut-huu-co-pho-mai-bi-do-hinh-que.jpg',
    },
    {
      name: 'Banh gao lut huu co 3',
      amount: '80',
      price: '72.000 ',
      detail:
        'Bánh gạo lứt hữu cơ Bebedang phô mai bí đỏ hình que (Trên 6 tháng)',
      imageUrl:
        'https://media.bibomart.com.vn/resize.460x-/media/catalog/product/b/a/banh-gao-lut-huu-co-pho-mai-bi-do-hinh-que.jpg',
    },
    {
      name: 'Banh gao lut huu co 4',
      amount: '99',
      price: '72.000 ',
      detail:
        'Bánh gạo lứt hữu cơ Bebedang phô mai bí đỏ hình que (Trên 6 tháng)',
      imageUrl:
        'https://media.bibomart.com.vn/resize.460x-/media/catalog/product/b/a/banh-gao-lut-huu-co-pho-mai-bi-do-hinh-que.jpg',
    },
    {
      name: 'Banh gao lut huu co 5',
      amount: '0',
      price: '72.000 ',
      detail:
        'Bánh gạo lứt hữu cơ Bebedang phô mai bí đỏ hình que (Trên 6 tháng)',
      imageUrl:
        'https://media.bibomart.com.vn/resize.460x-/media/catalog/product/b/a/banh-gao-lut-huu-co-pho-mai-bi-do-hinh-que.jpg',
    },
    {
      name: 'Banh gao lut huu co 6',
      amount: '80',
      price: '72.000 ',
      detail:
        'Bánh gạo lứt hữu cơ Bebedang phô mai bí đỏ hình que (Trên 6 tháng)',
      imageUrl:
        'https://media.bibomart.com.vn/resize.460x-/media/catalog/product/b/a/banh-gao-lut-huu-co-pho-mai-bi-do-hinh-que.jpg',
    },
    {
      name: 'Banh gao lut huu co 7',
      amount: '99',
      price: '72.000 ',
      detail:
        'Bánh gạo lứt hữu cơ Bebedang phô mai bí đỏ hình que (Trên 6 tháng)',
      imageUrl:
        'https://media.bibomart.com.vn/resize.460x-/media/catalog/product/b/a/banh-gao-lut-huu-co-pho-mai-bi-do-hinh-que.jpg',
    },
  ]);

  const navigation = useNavigation();
  const [username, setusername] = useState('');
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
          flex: 10,
        }}>
        <Taskbar navigation={navigation} title="Home" user="tu" />
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
              keyExtractor={eachproducts => eachproducts.name}
              data={products}
              renderItem={({item}) => (
                <Product2Item
                  navigation={navigation}
                  products={item}
                  key={item.name}
                />
              )}
            />
          </View>
        </View>
        {username != null
          ? console.log(`mail: ${username},password: ${password}`)
          : null}
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
