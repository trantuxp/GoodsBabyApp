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
import {images, icons, fontsize, colors, CallURL} from '../../constant';
import Icons from 'react-native-vector-icons/FontAwesome5';
import ProductItem from './ProductItem';
import Product2Item from './Product2Item';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Taskbar from '../Taskbar';
import axios from 'axios';
function ProductList(props) {
  const {navigation} = props;
  const route = useRoute();
  const idloaisp = route.params?.idloaisp;

  const [data, setdata] = useState([]);

  useEffect(() => {
    calGetUrl();
  }, [data]);

  const calGetUrl = async () => {
    axios
      .get(CallURL.URL_sptheodm, {
        params: {
          idloaisp: idloaisp,
        },
      })

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
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flex: 10,
        }}>
        <Taskbar navigation={navigation} title="Đồ chơi lắp ráp" />
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
            data={data}
            key={data.id}
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
