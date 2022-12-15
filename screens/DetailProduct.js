import {
  Text,
  StyleSheet,
  View,
  Button,
  TextInput,
  NumberInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React, {Component, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, fontsize} from '../constant';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation, useRoute} from '@react-navigation/native';
import Taskbar from './Taskbar';
import NumericInput from 'react-native-numeric-input';
import axios from 'axios';
import AddProduct from '../admin/AddProduct';
export default function DetailProduct(props) {
  const [valueNumeric, setvalueNumeric] = useState(0);
  const navigation = useNavigation();
  const route = useRoute();
  const id = route.params?.id;
  const name = route.params?.name;
  const amount = route.params?.amount;
  const price = route.params?.price;
  const detail = route.params?.detail;
  const imageUrl = route.params?.imageUrl;
  const URL_themgh = 'http://192.168.1.12/serverAppCk/addcart.php';
  // const {name, amount, price, detail, imageUrl} = products;

  const calladdcart = async (
    iduser,
    idsp,
    tenhang,
    soluong,
    soluongmua,
    gia,
    anh,
    mota,
  ) => {
    axios
      // them hang hoa
      .get(URL_themgh, {
        params: {
          iduser: iduser,
          idsp: idsp,
          tenhang: tenhang,
          soluong: soluong,
          soluongmua: soluongmua,
          gia: gia,
          anh: anh,
          mota: mota,
        },
      })
      .then(res => {
        console.log(typeof res.data.data);
        console.log(JSON.stringify(res.data.data));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 10,
        }}>
        <Taskbar navigation={navigation} title="DetailProduct" user="anhtu" />
      </View>
      <View style={{flexDirection: 'row', flex: 40}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{
              width: 200,
              height: 200,
              resizeMode: 'cover',
              borderRadius: 10,
            }}
            source={{
              uri: imageUrl,
            }}
          />
        </View>
        <View style={{flex: 1, marginHorizontal: 10, marginVertical: 10}}>
          <Text
            style={{
              marginVertical: 10,
              fontSize: fontsize.h5,
              fontWeight: 'bold',
            }}>
            {name}
          </Text>
          <Text
            style={{
              marginVertical: 10,
              fontSize: fontsize.h5,
              color: colors.alert,
              fontWeight: 'bold',
            }}>
            {price} đ
          </Text>
          <View style={{alignSelf: 'center', marginVertical: 10}}>
            <NumericInput
              minValue={0}
              maxValue={100}
              iconSize={parseInt(amount)}
              step={1}
              valueType="real"
              rounded
              textColor="#B0228C"
              iconStyle={{color: 'white'}}
              rightButtonBackgroundColor="#EA3788"
              leftButtonBackgroundColor="#E56B70"
              value={valueNumeric}
              onChange={value => setvalueNumeric(value)}
            />
          </View>
          <Text style={{marginVertical: 10}}>Số lượng còn lại: {amount} </Text>
          <Button
            style={{backgroundColor: colors.primary}}
            title="Buy"
            onPress={() => {
              setvalueNumeric(0);
              calladdcart(
                3,
                id,
                name,
                amount,
                valueNumeric,
                price,
                imageUrl,
                detail,
              );
              AddProduct;
              navigation.navigate('Cart');
            }}></Button>
        </View>
      </View>
      <View style={{flex: 50, padding: 10}}>
        <KeyboardAwareScrollView>
          <View
            style={{
              flex: 1,
            }}>
            <View style={{height: 1, backgroundColor: 'black'}} />
            <View style={{flex: 1, padding: 20}}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Mô tả chi tiết
              </Text>
              <Text>{detail}</Text>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
