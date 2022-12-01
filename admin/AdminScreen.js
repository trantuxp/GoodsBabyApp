import {
  Text,
  StyleSheet,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {Component, useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, fontsize, images} from '../constant';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
export default function AdminScreen(props) {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 90, padding: 20}}>
        <View style={{flex: 20}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ManagerProduct');
            }}
            style={{
              marginTop: 20,
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
              Quản lý hàng hóa
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 20}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ManagerAccount');
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
              Quản lý Tài khoản
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 20}}>
          <TouchableOpacity
            onPress={() => {}}
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
              Quản lý Tin tức
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 20}}></View>
        <View style={{flex: 20}}></View>
        <View style={{flex: 20}}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
