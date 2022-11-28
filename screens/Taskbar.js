import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {colors, fontsize, images} from '../constant';

export default function Taskbar(props) {
  const {title} = props;
  const {user} = props;
  const {navigation} = props;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colors.primary,
      }}>
      <View
        style={{
          flex: 20,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        {/* <TouchableOpacity
          onPress={() => {
            alert('hi');
          }}>
          <Image
            source={images.back}
            style={{
              width: 40,
              height: 40,
              alignItems: 'center',
              tintColor: colors.white,
            }}
          />
        </TouchableOpacity> */}
        <TouchableOpacity
          style={{marginLeft: 5}}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Image
            source={images.menu}
            style={{
              width: 40,
              height: 40,
              alignItems: 'center',
              tintColor: colors.white,
            }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Homescreen');
          }}>
          <Text style={styles.Text}>{title}</Text>
        </TouchableOpacity>
      </View>
      {/* <View
        style={{
          flex: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{marginRight: 5}}
            onPress={() => {
              alert('hi');
            }}>
            <Text style={styles.Text}>{user}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              alert('hi');
            }}>
            <Image
              source={images.logout}
              style={{
                width: 25,
                height: 25,
                alignItems: 'center',
                tintColor: colors.white,
              }}
            />
          </TouchableOpacity>
        </View>
      </View> */}

      <View
        style={{
          flex: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Signin');
          }}>
          <Image
            source={images.account}
            style={{
              width: 30,
              height: 30,
              alignItems: 'center',
              tintColor: colors.white,
            }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            alert('hi');
          }}>
          <Image
            source={images.cart}
            style={{
              width: 30,
              height: 30,
              alignItems: 'center',
              tintColor: colors.white,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Text: {
    color: colors.white,
    fontSize: fontsize.h3,
    fontWeight: 'bold',
  },
});
