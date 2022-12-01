import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {colors, fontsize, images} from '../constant';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
export default function Payment(props) {
  const navigation = useNavigation();
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
