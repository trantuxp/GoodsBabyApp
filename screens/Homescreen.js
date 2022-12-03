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
      id: 1,
      name: 'Ráp tàu cướp biển chim cánh cụt 1240',
      amount: '100',
      price: '125.000 ',
      detail:
        'Sản phẩm được làm từ chất liệu an toàn cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.',
      imageUrl:
        'https://dochoitreem.com/wp-content/uploads/2022/04/Rap-tau-cuop-bien-hcim-canh-cut-1240-500x480.jpg',
    },
    {
      id: 2,
      name: 'Lắp ráp robot và xe 2 in 1 7019',
      amount: '50',
      price: '240.000 ',
      detail:
        'Sản phẩm được làm từ chất liệu an toàn cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.',
      imageUrl:
        'https://dochoitreem.com/wp-content/uploads/2022/07/Lap-rap-robot-va-xe-2-in-1-7019-500x480.jpg',
    },
    {
      id: 3,
      name: 'Lắp ráp cho bé D373',
      amount: '20',
      price: '208.000 ',
      detail:
        'Sản phẩm được làm từ chất liệu an toàn cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.',
      imageUrl:
        'https://dochoitreem.com/wp-content/uploads/2022/01/Lap-rap-cho-be-D373-500x480.jpg',
    },
    {
      id: 4,
      name: 'Lắp ráp tàu chiến đấu 8 in 1 42022',
      amount: '120',
      price: '455.000 ',
      detail:
        'Sản phẩm được làm từ chất liệu an toàn cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.',
      imageUrl:
        'https://dochoitreem.com/wp-content/uploads/2022/01/Lap-rap-tau-chien-dau-8-in-1-42022-500x480.jpg',
    },
    {
      id: 5,
      name: 'Lắp ráp lâu đài Moira 20037Q',
      amount: '80',
      price: '169.000 ',
      detail:
        'Sản phẩm được làm từ chất liệu an toàn cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.',
      imageUrl:
        'https://dochoitreem.com/wp-content/uploads/2021/05/Lap-rap-lau-dai-Moira-20037Q-500x480.jpg',
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
              keyExtractor={eachproducts => eachproducts.name}
              data={products}
              renderItem={({item}) => (
                <Product2Item navigation={navigation} products={item} />
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
