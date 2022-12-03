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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Taskbar from '../Taskbar';
function ProductList(props) {
  const {navigation} = props;
  const [products, setproducts] = useState([
    {
      id: 1,
      name: 'Ráp tàu cướp biển chim cánh cụt 1240',
      amount: '100',
      price: '125.000 ',
      detail:
        'Sản phẩm được làm từ chất liệu an toàn cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.',
      imageUrl:
        'https://dochoitreem.com/wp-content/uploads/2022/04/Rap-tau-cuop-bien-hcim-canh-cut-1240-500x480.jpg',
    },
    {
      id: 2,
      name: 'Lắp ráp robot và xe 2 in 1 7019',
      amount: '50',
      price: '240.000 ',
      detail:
        'Sản phẩm được làm từ chất liệu an toàn cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.',
      imageUrl:
        'https://dochoitreem.com/wp-content/uploads/2022/07/Lap-rap-robot-va-xe-2-in-1-7019-500x480.jpg',
    },
    {
      id: 3,
      name: 'Lắp ráp cho bé D373',
      amount: '20',
      price: '208.000 ',
      detail:
        'Sản phẩm được làm từ chất liệu an toàn cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.',
      imageUrl:
        'https://dochoitreem.com/wp-content/uploads/2022/01/Lap-rap-cho-be-D373-500x480.jpg',
    },
    {
      id: 4,
      name: 'Lắp ráp tàu chiến đấu 8 in 1 42022',
      amount: '120',
      price: '455.000 ',
      detail:
        'Sản phẩm được làm từ chất liệu an toàn cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.',
      imageUrl:
        'https://dochoitreem.com/wp-content/uploads/2022/01/Lap-rap-tau-chien-dau-8-in-1-42022-500x480.jpg',
    },
    {
      id: 5,
      name: 'Lắp ráp lâu đài Moira 20037Q',
      amount: '80',
      price: '169.000 ',
      detail:
        'Sản phẩm được làm từ chất liệu an toàn cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.',
      imageUrl:
        'https://dochoitreem.com/wp-content/uploads/2021/05/Lap-rap-lau-dai-Moira-20037Q-500x480.jpg',
    },
  ]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flex: 10,
        }}>
        <Taskbar navigation={navigation} title="Đồ chơi lắp ráp" user="anhtu" />
      </View>
      <View
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
      </View>

      <View
        style={{
          top: 20,
          flex: 80,
        }}>
        <View style={{flex: 80}}>
          <FlatList
            keyExtractor={eachproducts => eachproducts.name}
            data={products}
            renderItem={({item}) => (
              <ProductItem navigation={navigation} products={item} />
            )}
          />
        </View>
      </View>
    </View>
  );
}
export default ProductList;
