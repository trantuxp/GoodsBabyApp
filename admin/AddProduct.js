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

export default function AddProduct() {
  const [selectedValue, setSelectedValue] = useState('');

  const values = [
    'Đồ chơi lắp ráp',
    'Đồ chơi nấu ăn',
    'ĐỒ CHƠI GIÁO DỤC',
    'BÚP BÊ',
  ];
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
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{flex: 30}}>
            <Text style={{fontSize: fontsize.h5, color: colors.black}}>
              Tên hàng:
            </Text>
          </View>
          <View style={{flex: 70}}>
            <TextInput
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
              Giá:
            </Text>
          </View>
          <View style={{flex: 70}}>
            <TextInput
              style={{borderWidth: 1, borderRadius: 40, height: '80%'}}
              placeholder="VND"
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
              Ảnh:
            </Text>
          </View>
          <View style={{flex: 70}}>
            <TextInput
              style={{borderWidth: 1, borderRadius: 40, height: '80%'}}
              placeholder="http/URL"
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
              Số lượng:
            </Text>
          </View>
          <View style={{flex: 70}}>
            <TextInput
              style={{borderWidth: 1, borderRadius: 40, height: '80%'}}
              placeholder="number"
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
              Mô tả:
            </Text>
          </View>
          <View style={{flex: 70}}>
            <TextInput
              style={{borderWidth: 1, borderRadius: 40, height: '80%'}}
              placeholder="Mô tả"
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
              Loại sản phẩm:
            </Text>
          </View>
          <View style={{flex: 70}}>
            <View style={{height: 40}}>
              <ComboBox
                style={{borderWidth: 1, borderRadius: 50}}
                values={values}
                onValueSelect={setSelectedValue}
              />
            </View>
          </View>
        </View>
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
            Thêm hàng hóa
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
