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

import image from '../constant';
import {images, icons, fontsize, colors} from '../constant';
import Icons from 'react-native-vector-icons/FontAwesome5';
import ProductItem from './ProductLists/ProductItem';

import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Taskbar from './Taskbar';
function News(props) {
  const {navigation} = props;
  const [products, setproducts] = useState([
    {
      id: 1,
      name: 'CÂU CHUYỆN GIÁO DỤC TỪ CÁCH MUA ĐỒ CHƠI CHO CON',

      detail:
        'Mỗi năm một lần, chị Hoa (Hà Nội) đều đưa bé Nam đến làng trẻ Hữu Nghị để mang đồ chơi của mình tặng cho các bạn nhỏ khuyết tật, như một cách để giáo dục...',
      imageUrl:
        'https://dochoitreem.com/wp-content/uploads/2016/02/5956x640.jpg',
    },
    {
      id: 2,
      name: 'LÀM THẾ NÀO ĐỂ DẠY TRẺ THÓI QUEN TỰ LẬP TỪ BÉ',
      amount: '50',
      price: '240.000 ',
      detail:
        'Trẻ khi còn nhỏ nếu được ba mẹ nuông chiều sẽ nảy sinh tính ỷ lại, trở nên bướng bỉnh và không nghe lời. Vì vậy, để giáo dục trẻ một cách tốt...',
      imageUrl:
        'https://dochoitreem.com/wp-content/uploads/2015/09/lam-the-nao-de-day-tre-tu-tap-tu-nho-1.jpg',
    },
    {
      id: 3,
      name: 'NHỮNG MẢNG SÁNG TRONG TÍNH CÁCH TRẺ QUA CHỌN ĐỒ CHƠI',
      amount: '20',
      price: '208.000 ',
      detail:
        'Lựa chọn đúng loại đồ chơi có ích nhất cho bé thì cha mẹ nào cũng muốn nhưng không hẳn lúc nào cũng được như ý, thế nên đôi khi mua về mà bé còn nhỏ quá ...',
      imageUrl:
        'https://dochoitreem.com/wp-content/uploads/2016/02/nhung-mang-sang-trong-tinh-cach-tre-qua-chon-do-choi-2.jpg',
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
        <Taskbar navigation={navigation} title="Tin tức" user="anhtu" />
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
export default News;
