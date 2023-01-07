import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {Component, useState, useEffect} from 'react';
import {colors, fontsize, images, CallURL} from '../constant';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Payment(props) {
  const navigation = useNavigation();
  const route = useRoute();
  const result = route.params?.result;
  const result_soluongsp = route.params?.result_soluongsp;
  const [tenuser, settenuser] = useState();
  const [diachi, setdiachi] = useState();
  const [sodt, setsodt] = useState();
  const [email, setemail] = useState();
  const [iduser, setiduser] = useState();
  useEffect(() => {
    AsyncStorage.getItem('id').then(result => {
      setiduser(result);
    });
  }, [AsyncStorage.getItem('id')]);

  const AddOrder = (
    idkhachhang,
    tenkhachhang,
    diachi,
    sodt,
    email,
    tongsanpham,
    tongtien,
  ) => {
    // 👇️ passing function to setData method

    axios
      // them hang hoa
      .get(CallURL.URL_themdh, {
        params: {
          idkhachhang: idkhachhang,
          tenkhachhang: tenkhachhang,
          diachi: diachi,
          sodt: sodt,
          email: email,
          tongsanpham: tongsanpham,
          tongtien: tongtien,
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

    // setdata(prevState => {
    //   const newState = prevState.map(obj => {
    //     // 👇️ if id equals 2, update country property
    //     if (obj.id == idcart) {
    //       return {...obj, soluongmua: soluongmua};
    //     }

    //     // 👇️ otherwise return object as is
    //     return obj;
    //   });

    //   return newState;
    // });
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#CCCCCC',
      }}>
      <View
        style={{
          backgroundColor: colors.white,
          margin: 20,
          top: 30,
          flex: 80,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            top: 10,
            fontSize: fontsize.h3,
            color: colors.black,
            alignSelf: 'center',
          }}>
          THÔNG TIN KHÁCH HÀNG
        </Text>
        <KeyboardAwareScrollView>
          <View
            style={{
              marginVertical: 20,
              marginHorizontal: 20,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: fontsize.h5,
                color: colors.primary,
              }}>
              Họ và tên:
            </Text>
            <TextInput
              onChangeText={text => {
                // set errormail with enough condition yet?

                settenuser(text);
              }}
              placeholder="Nguyễn Văn A"
              placeholderTextColor={colors.placeholder}
            />

            <View
              style={{
                height: 1,
                backgroundColor: colors.primary,
              }}
            />
          </View>

          <View
            style={{
              marginVertical: 20,
              marginHorizontal: 20,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: fontsize.h5,
                color: colors.primary,
              }}>
              Địa chỉ:
            </Text>
            <TextInput
              onChangeText={text => {
                // set errormail with enough condition yet?

                setdiachi(text);
              }}
              placeholder="số nhà - đường - Phường - Thành Phố"
              placeholderTextColor={colors.placeholder}
            />

            <View
              style={{
                height: 1,
                backgroundColor: colors.primary,
              }}
            />
          </View>

          <View
            style={{
              marginVertical: 20,
              marginHorizontal: 20,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: fontsize.h5,
                color: colors.primary,
              }}>
              Số liên lạc:
            </Text>
            <TextInput
              onChangeText={text => {
                // set errormail with enough condition yet?

                setsodt(text);
              }}
              placeholder="84+ "
              placeholderTextColor={colors.placeholder}
            />

            <View
              style={{
                height: 1,
                backgroundColor: colors.primary,
              }}
            />
          </View>

          <View
            style={{
              marginVertical: 10,
              marginHorizontal: 20,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: fontsize.h5,
                color: colors.primary,
              }}>
              Email:
            </Text>
            <TextInput
              onChangeText={text => {
                // set errormail with enough condition yet?

                setemail(text);
              }}
              placeholder="example@gmail.com"
              placeholderTextColor={colors.placeholder}
            />
            <View
              style={{
                height: 1,
                backgroundColor: colors.primary,
              }}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
      <View
        style={{
          flex: 20,
          marginHorizontal: 20,
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            AddOrder(
              iduser,
              tenuser,
              diachi,
              sodt,
              email,
              result_soluongsp,
              result,
            );
            alert(result + result_soluongsp + iduser);
            alert(tenuser + diachi + sodt + email);
            navigation.navigate('Homescreen');
          }}
          title="LOGIN"
          style={{
            width: '50%',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.primary,
            borderRadius: 40,
            borderColor: colors.primary,
            borderWidth: 1,
            height: 40,
            borderRadius: 40,
            padding: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: fontsize.h5,
            }}>
            Xác nhận
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Homescreen');
          }}>
          <Text
            style={{
              padding: 10,
              colors: colors.primary,
              fontSize: fontsize.h5,
              alignSelf: 'center',
            }}>
            Trở về Trang chủ
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
