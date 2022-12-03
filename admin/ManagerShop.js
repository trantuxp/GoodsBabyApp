import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {Component, useState} from 'react';
import {colors, fontsize} from '../constant';
import ComboBox from 'react-native-combobox';
import TabBottom from '../admin/TabBottom';

export default function ManagerShop() {
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <View style={{flex: 10, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: fontsize.h3, color: colors.black}}>
          Add Product Form
        </Text>
      </View>
      <View style={{flex: 60, padding: 20}}>
        <View
          style={{
            flex: 10,
          }}></View>
        <View
          style={{
            flex: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{flex: 30}}>
            <Text style={{fontSize: fontsize.h5, color: colors.black}}>
              Tên Shop:
            </Text>
          </View>
          <View style={{flex: 70}}>
            <TextInput
              value="ETMBaby"
              style={{borderWidth: 1, borderRadius: 40, height: '80%'}}
              placeholder="Đồ chơi trẻ em"
              placeholderTextColor={colors.placeholder}
            />
          </View>
        </View>
        <View
          style={{
            flex: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{flex: 30}}>
            <Text style={{fontSize: fontsize.h5, color: colors.black}}>
              Địa chỉ Shop:
            </Text>
          </View>
          <View style={{flex: 70}}>
            <TextInput
              value="26 Huỳnh Văn Nghệ, Hòa Hải, Ngũ Hành Sơn, Đà Nẵng"
              style={{borderWidth: 1, borderRadius: 40, height: '80%'}}
              placeholderTextColor={colors.placeholder}
            />
          </View>
        </View>
        <View
          style={{
            flex: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{flex: 30}}>
            <Text style={{fontSize: fontsize.h5, color: colors.black}}>
              Số điện thoại:
            </Text>
          </View>
          <View style={{flex: 70}}>
            <TextInput
              value="0764609999"
              style={{borderWidth: 1, borderRadius: 40, height: '80%'}}
              placeholderTextColor={colors.placeholder}
            />
          </View>
        </View>
        <View
          style={{
            flex: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{flex: 30}}>
            <Text style={{fontSize: fontsize.h5, color: colors.black}}>
              Email:
            </Text>
          </View>
          <View style={{flex: 70}}>
            <TextInput
              value="etmbaby@gmail.com"
              style={{borderWidth: 1, borderRadius: 40, height: '80%'}}
              placeholder="number"
              placeholderTextColor={colors.placeholder}
            />
          </View>
        </View>

        <View
          style={{
            flex: 10,
          }}></View>
      </View>
      <View style={{flex: 10}}>
        <TouchableOpacity
          onPress={() => {
            // calladdProduct();
          }}
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.success,
            borderRadius: 40,
            borderColor: colors.success,
            borderWidth: 1,
            height: 40,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: fontsize.h4,
            }}>
            Cập nhật
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 10}}>
        <TabBottom />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
