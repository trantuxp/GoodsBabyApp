import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {Component, useState, useEffect} from 'react';
import {colors, fontsize, images} from '../constant';
import ComboBox from 'react-native-combobox';
import axios from 'axios';
import TabBottom from '../admin/TabBottom';
export default function ManagerOrder() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#f5f5f5',
      }}>
      <View
        style={{
          flex: 20,
          flexDirection: 'row',
          justifyContent: 'center',
          marginLeft: 10,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ManagerShop');
          }}>
          <Image
            source={images.duyet}
            style={{
              width: 70,
              height: 70,
              alignSelf: 'center',
              borderWidth: 1,
              borderRadius: 20,
              marginEnd: 10,
            }}
          />
          <View>
            <Text style={{color: colors.success, fontWeight: 'bold'}}>
              Duyệt đơn
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ManagerShop');
          }}>
          <Image
            source={images.danggiao}
            style={{
              width: 70,
              height: 70,
              alignSelf: 'center',
              borderWidth: 1,
              borderRadius: 20,
              marginEnd: 10,
            }}
          />
          <View>
            <Text style={{color: colors.inactive}}>Đang giao</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ManagerShop');
          }}>
          <Image
            source={images.dagiao}
            style={{
              width: 70,
              height: 70,
              alignSelf: 'center',
              borderWidth: 1,
              borderRadius: 20,
              marginEnd: 10,
            }}
          />
          <View>
            <Text style={{color: colors.inactive}}>Đã giao </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ManagerShop');
          }}>
          <Image
            source={images.huydon}
            style={{
              width: 70,
              height: 70,
              alignSelf: 'center',
              borderWidth: 1,
              borderRadius: 20,
              marginEnd: 10,
            }}
          />
          <View>
            <Text style={{color: colors.inactive}}>Hủy đơn</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flex: 50, backgroundColor: colors.white}}>
        <View
          style={{
            flex: 5,
            flexDirection: 'row',
            padding: 10,
            borderBottomWidth: 1,
            borderColor: colors.black,
          }}>
          <View style={{flex: 25, alignItems: 'center'}}>
            <Text>Tên người mua</Text>
          </View>
          <View style={{flex: 25, alignItems: 'center'}}>
            <Text>Email</Text>
          </View>
          <View style={{flex: 25, alignItems: 'center'}}>
            <Text>Tổng sản phẩm</Text>
          </View>
          <View style={{flex: 25, alignItems: 'center'}}>
            <Text>Tỏng tiền</Text>
          </View>
        </View>
        <View style={{flex: 96}}></View>
      </View>
      <View style={{flex: 10}}>
        <TabBottom />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
