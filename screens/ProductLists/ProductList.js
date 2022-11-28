import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
  FlatList,
  Button,
} from 'react-native';

import image from '../../constant/images';
import {images, icons, fontsize, colors} from '../../constant';
import Icons from 'react-native-vector-icons/FontAwesome5';
import ProductItem from './ProductItem';
import Product2Item from './Product2Item';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
function ProductList(props) {
  const {navigation} = props;
  const [products, setproducts] = useState([
    {
      name: 'Banh gao lut huu co 1',
      amount: '100',
      price: '72.000 ',
      detail:
        'Bánh gạo lứt hữu cơ Bebedang phô mai bí đỏ hình que (Trên 6 tháng)',
      imageUrl:
        'https://media.bibomart.com.vn/resize.460x-/media/catalog/product/b/a/banh-gao-lut-huu-co-pho-mai-bi-do-hinh-que.jpg',
    },
    {
      name: 'Bot an dam',
      amount: '50',
      price: '165.000 ',
      detail: 'Bột ăn dặm Heinz súp lơ, bông cải, phô mai 200g (Trên 6 tháng)',
      imageUrl:
        'https://media.bibomart.com.vn/resize.460x-/media/catalog/product/c/h/chao-heinz-bong-cai-sup-lo-pho-mai_1.jpg',
    },
    {
      name: 'banh an dam',
      amount: '20',
      price: '68.000 ',
      detail: 'Bánh ăn dặm Pigeon vị rong biển 13366 (Trên 6 tháng)',
      imageUrl:
        'https://media.bibomart.com.vn/resize.460x-/media/catalog/product/b/a/banh-gao-lut-huu-co-pho-mai-bi-do-hinh-que.jpg',
    },
    {
      name: 'Banh gao lut huu co 2',
      amount: '0',
      price: '72.000 ',
      detail:
        'Bánh gạo lứt hữu cơ Bebedang phô mai bí đỏ hình que (Trên 6 tháng)',
      imageUrl:
        'https://media.bibomart.com.vn/resize.460x-/media/catalog/product/b/a/banh-gao-lut-huu-co-pho-mai-bi-do-hinh-que.jpg',
    },
    {
      name: 'Banh gao lut huu co 3',
      amount: '80',
      price: '72.000 ',
      detail:
        'Bánh gạo lứt hữu cơ Bebedang phô mai bí đỏ hình que (Trên 6 tháng)',
      imageUrl:
        'https://media.bibomart.com.vn/resize.460x-/media/catalog/product/b/a/banh-gao-lut-huu-co-pho-mai-bi-do-hinh-que.jpg',
    },
    {
      name: 'Banh gao lut huu co 4',
      amount: '99',
      price: '72.000 ',
      detail:
        'Bánh gạo lứt hữu cơ Bebedang phô mai bí đỏ hình que (Trên 6 tháng)',
      imageUrl:
        'https://media.bibomart.com.vn/resize.460x-/media/catalog/product/b/a/banh-gao-lut-huu-co-pho-mai-bi-do-hinh-que.jpg',
    },
    {
      name: 'Banh gao lut huu co 5',
      amount: '0',
      price: '72.000 ',
      detail:
        'Bánh gạo lứt hữu cơ Bebedang phô mai bí đỏ hình que (Trên 6 tháng)',
      imageUrl:
        'https://media.bibomart.com.vn/resize.460x-/media/catalog/product/b/a/banh-gao-lut-huu-co-pho-mai-bi-do-hinh-que.jpg',
    },
    {
      name: 'Banh gao lut huu co 6',
      amount: '80',
      price: '72.000 ',
      detail:
        'Bánh gạo lứt hữu cơ Bebedang phô mai bí đỏ hình que (Trên 6 tháng)',
      imageUrl:
        'https://media.bibomart.com.vn/resize.460x-/media/catalog/product/b/a/banh-gao-lut-huu-co-pho-mai-bi-do-hinh-que.jpg',
    },
    {
      name: 'Banh gao lut huu co 7',
      amount: '99',
      price: '72.000 ',
      detail:
        'Bánh gạo lứt hữu cơ Bebedang phô mai bí đỏ hình que (Trên 6 tháng)',
      imageUrl:
        'https://media.bibomart.com.vn/resize.460x-/media/catalog/product/b/a/banh-gao-lut-huu-co-pho-mai-bi-do-hinh-que.jpg',
    },
  ]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      {/* <View
        style={{
          flex: 10,
          flexDirection: 'row',
          top: 15,
          marginHorizontal: 10,
        }}>
        <TextInput
          placeholder="Search by name"
          placeholderTextColor={colors.placeholder}
          style={{
            backgroundColor: 'white',
            height: 40,
            flex: 1,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: 'gray',

            alginItem: 'center',
            justifyContent: 'center',
          }}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 5,
            left: '85%',
          }}
          onPress={() => {
            alert('timkiem');
          }}>
          <Icons name="search" size={30} color="gray" />
        </TouchableOpacity>
      </View> */}
      <View
        style={{
          top: 20,
          flex: 100,
        }}>
        <SafeAreaView>
          <FlatList
            numColumns={2}
            keyExtractor={eachproducts => eachproducts.name}
            data={products}
            renderItem={({item}) => (
              <Product2Item
                products={item}
                key={item.name}
                navigation={this.props.navigation}
                onPress={() => {
                  navigation.navigate('DetailProduct');
                  // alert(`you press item's name: ${item.name}`);
                }}
              />
            )}
          />
        </SafeAreaView>
      </View>
    </View>
  );
}
export default ProductList;
