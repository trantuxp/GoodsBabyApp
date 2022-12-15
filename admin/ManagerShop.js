import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {Component, useState, useEffect} from 'react';
import {colors, fontsize} from '../constant';
import ComboBox from 'react-native-combobox';
import axios from 'axios';
import TabBottom from '../admin/TabBottom';

export default function ManagerShop() {
  const [tenshop, settenshop] = useState();
  const [diachi, setdiachi] = useState();
  const [sodt, setsodt] = useState();
  const [email, setemail] = useState();

  const URL = 'http://192.168.1.12/serverAppCk/getcuahang.php';
  const URL_themhh = 'http://192.168.1.12/serverAppCk/themhanghoa.php';
  const URL_xoahh = 'http://192.168.1.12/serverAppCk/xoahanghoa.php';
  const [data, setdata] = useState([]);

  useEffect(() => {
    calGetUrl();
  }, [data]);

  const calGetUrl = async () => {
    axios
      .get(URL)

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
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <View style={{flex: 10, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: fontsize.h3, color: colors.black}}>
          Add Product Form
        </Text>
      </View>
      {data.map(item => (
        <View style={{flex: 60, padding: 20}} key={item.tenshop}>
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
                onChangeText={text => {
                  settenshop(text);
                }}
                defaultValue={item.tenshop}
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
                onChangeText={text => {
                  setdiachi(text);
                }}
                defaultValue={item.diachi}
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
                onChangeText={text => {
                  setsodt(text);
                }}
                defaultValue={item.sodt}
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
                onChangeText={text => {
                  setemail(text);
                }}
                defaultValue={item.email}
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
      ))}
      <View style={{flex: 10}}>
        <TouchableOpacity
          onPress={() => {
            console.log(diachi);
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
