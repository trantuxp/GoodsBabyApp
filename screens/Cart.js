import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import {useRoute} from '@react-navigation/native';
import Taskbar from './Taskbar';
import {colors, fontsize, images} from '../constant';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import NumericInput from 'react-native-numeric-input';

export default function Cart(props) {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 10,
        }}>
        <Taskbar navigation={navigation} title="Home" user="tu" />
      </View>
      <View
        style={{
          backgroundColor: colors.white,
          flex: 70,
        }}>
        <View
          style={{
            flex: 25,
            flexDirection: 'row',
            marginHorizontal: 10,
            marginVertical: 10,
          }}>
          <View style={{flex: 40}}>
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'cover',
                borderRadius: 10,
              }}
              source={{
                uri: 'https://media.bibomart.com.vn/resize.460x-/media/catalog/product/b/a/banh-gao-lut-huu-co-pho-mai-bi-do-hinh-que.jpg',
              }}
            />
          </View>
          <View style={{flex: 50}}>
            <Text
              style={{
                fontSize: fontsize.h4,
                fontWeight: 'bold',
                marginBottom: 10,
              }}>
              Bột ăn dặm
            </Text>
            <Text
              style={{
                marginBottom: 10,
                fontSize: fontsize.h4,
                color: colors.alert,
                fontWeight: 'bold',
              }}>
              72.000 đ
            </Text>
            <NumericInput
              width={20}
              minValue={0}
              maxValue={100}
              iconSize={100}
              totalWidth={100}
              totalHeight={35}
              step={1}
              height={20}
              valueType="real"
              rounded
              textColor="#000"
              iconStyle={{color: 'black'}}
              value={0}
              onChange={value => console.log(value)}
            />
          </View>
          <View style={{flex: 10}}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <TouchableOpacity style={{justifyContent: 'center'}}>
                <Image
                  source={images.back}
                  style={{width: 30, height: 30, resizeMode: 'cover'}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 20,
        }}>
        <View
          style={{
            flex: 33,
            flexDirection: 'row',
            marginHorizontal: 10,
            marginVertical: 10,
          }}>
          <View style={{flex: 50, justifyContent: 'center'}}>
            <Text>Thành tiền</Text>
          </View>
          <View
            style={{
              flex: 50,
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: fontsize.h3, color: colors.alert}}>
              500.000 đ
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 33,
            marginBottom: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Homescreen');
            }}
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.alert,
              borderRadius: 40,
              borderColor: colors.primary,
              borderWidth: 1,
              height: 40,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: fontsize.h4,
              }}>
              Tiến hành đặt hàng
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 33,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Homescreen');
            }}
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.inactive,
              borderRadius: 40,
              borderColor: colors.primary,
              borderWidth: 1,
              height: 40,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: fontsize.h4,
              }}>
              Tiếp tục mua hàng
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
