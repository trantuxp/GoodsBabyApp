import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import {images, colors, icons, fontsize} from '../../constant';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation, useRoute} from '@react-navigation/native';

function _getColorFromStatus(amount) {
  /*
    if(status.toLowerCase().trim() == 'opening now') {
        return colors.success
    } else if(status.toLowerCase().trim() == 'closing soon') {
        return colors.alert
    } else if(status.toLowerCase().trim() == 'comming soon') {
        return colors.warning
    }
    return colors.success
    */
  return amount > 10
    ? colors.success
    : amount > 0
    ? colors.warning
    : colors.alert;

  // return status.toLowerCase().trim() == 'opening now' ? colors.success :
  //         (status.toLowerCase().trim() == 'closing soon' ? colors.alert :
  //         (status.toLowerCase().trim() == 'comming soon' ? colors.warning : colors.success))
}
function Product2Item(props) {
  const {name, amount, price, detail, imageUrl} = props.products; //destructuring an object
  const navigation = props.navigation;

  return (
    <View style={{width: '48%', marginHorizontal: '1%'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DetailProduct', {
            name: name,
            amount: amount,
            price: price,
            detail: detail,
            imageUrl: imageUrl,
          });
        }}
        style={{
          height: '100%',
          flex: 1,
          borderWidth: 1,
          borderColor: 'white',
          marginStart: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{
            width: 120,
            height: 120,
            resizeMode: 'cover',
            borderRadius: 10,
          }}
          source={{
            uri: imageUrl,
          }}
        />
        <Text
          style={{
            color: 'black',
            fontSize: fontsize.h4,
            fontWeight: 'bold',
          }}>
          {name}
        </Text>
        <Text
          style={{
            color: 'red',
            fontSize: fontsize.h4,
            fontWeight: 'bold',
          }}>
          {price}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default Product2Item;
