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
function ProductItem(props) {
  let {name, amount, price, detail, imageUrl} = props.products; //destructuring an object
  const {onPress} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 150,
        paddingStart: 10,
        flexDirection: 'row',
      }}>
      <Image
        style={{
          width: 100,
          height: 100,
          resizeMode: 'cover',
          borderRadius: 10,
          marginRight: 15,
        }}
        source={{
          uri: imageUrl,
        }}
      />
      <View
        style={{
          flex: 1,
          marginRight: 10,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: fontsize.h4,
            fontWeight: 'bold',
          }}>
          {name}
        </Text>
        <View
          style={{
            height: 1,
            backgroundColor: 'black',
          }}
        />

        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: colors.inactive,
              fontSize: fontsize.h4,
            }}>
            Số lượng còn:{' '}
          </Text>
          <Text
            style={{
              color: _getColorFromStatus(amount),
              fontSize: fontsize.h4,
            }}>
            {amount.toUpperCase()}
          </Text>
        </View>
        <Text
          style={{
            color: colors.primary,
            fontSize: fontsize.h4,
          }}>
          Price: {price} $
        </Text>

        <Text
          style={{
            color: colors.inactive,
            fontSize: fontsize.h4,
          }}>
          Detail: {detail}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
export default ProductItem;
