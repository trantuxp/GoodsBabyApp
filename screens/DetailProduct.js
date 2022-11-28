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
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../constant';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation, useRoute} from '@react-navigation/native';
import Taskbar from './Taskbar';

export default function DetailProduct(props) {
  const navigation = useNavigation();
  const {name} = props;
  console.log(name);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 10,
        }}>
        <Taskbar navigation={navigation} title="DetailProduct" user="tu" />
      </View>
      <View style={{flexDirection: 'row', flex: 40}}>
        <View style={{flex: 1}}>
          <Image
            style={{
              width: 200,
              height: 200,
              resizeMode: 'cover',
              borderRadius: 10,
              justifyContent: 'center',
              alignSelf: 'center',
            }}
            source={{
              uri: '',
            }}
          />
        </View>
        <View style={{flex: 1, marginHorizontal: 10, marginVertical: 10}}>
          <Text style={{marginVertical: 10}}>{name} </Text>
          <Text style={{marginVertical: 10}}>72.000 đ</Text>
          <TextInput
            keyboardType="numeric"
            style={{
              borderColor: 'black',
              borderWidth: 1,
              height: 40,
              fontSize: 12,
              justifyContent: 'center',
              marginVertical: 10,
            }}
            placeholder="Number"></TextInput>
          <Button
            style={{backgroundColor: colors.primary}}
            title="Buy"
            onPress={() => {
              navigation.navigate('Cart', {
                name: 'tu',
              });
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
              <Text>
                Bánh gạo lứt hữu cơ Bebedang phô mai bí đỏ hình que (Trên 6
                tháng){' '}
              </Text>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
