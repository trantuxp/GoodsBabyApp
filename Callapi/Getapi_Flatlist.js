import {
  Text,
  StyleSheet,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {Component, useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import axios from 'axios';

const URL = 'http://192.168.1.6/serverAppCk/getloaisp.php';
const URL1 = 'https://jsonplaceholder.typicode.com/users';
function Getapi_Flatlist() {
  const [data, setdata] = useState([]);

  const [isloading, setisloading] = useState(true);
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
  // const CallAPI = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({data: 'Data'});
  //     }, 3000);
  //   });
  // };
  // const getData = async setData => {
  //   let data = await CallAPI();
  //   setData(data);
  // };
  // useEffect(() => {
  //   calGetUrl();
  //   return () => {};
  // });
  useEffect(() => {
    calGetUrl();
  }, [data]);
  const calGetUrl = async () => {
    axios(URL)
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

  // renderItem = ({item, index}) => {
  //   return (
  //     <View
  //       style={{
  //         flexDirection: 'row',
  //         marginTop: 8,
  //         padding: 5,
  //         shadowColor: '#000',
  //         shadowRadius: 4,
  //         ShadowOpacity: 0.25,
  //         alignItems: 'center',
  //       }}>
  //       <Image
  //         source={{uri: item.hinhloaisp}}
  //         style={{width: 100, height: 100}}
  //         resizeMode="contain"
  //       />
  //       <Text>
  //         {item.tenloaisp}
  //
  //       </Text>
  //     </View>
  //   );
  // };
  const renderItem = ({item}) => (
    <View key={item.key}>
      <Text>{item.title}</Text>
    </View>
  );
  enderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  };
  //handling onPress action
  getListViewItem = item => {
    Alert.alert(item.key);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              marginTop: 8,
              padding: 5,
              shadowColor: '#000',
              shadowRadius: 4,
              ShadowOpacity: 0.25,
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: item.hinhloaisp,
              }}
              style={{width: 100, height: 100}}
              resizeMode="contain"
            />
            <Text>{item.tenloaisp}</Text>
          </View>
          // <Text style={styles.item}>{item.tenloaisp}</Text>
        )}
      />
    </View>

    // <View
    //   style={{
    //     flex: 1,
    //   }}>
    //   <View
    //     style={{
    //       flex: 50,
    //       flexDirection: 'row',
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //     }}>
    //     <TouchableOpacity
    //       onPress={calGetUrl}
    //       style={{
    //         borderWidth: 1,
    //         borderRadius: 5,
    //         height: 30,
    //         width: 50,
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //       }}>
    //       <Text>GET</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       style={{
    //         borderWidth: 1,
    //         borderRadius: 5,
    //         height: 30,
    //         width: 90,
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //       }}>
    //       <Text>GET With ID</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       style={{
    //         borderWidth: 1,
    //         borderRadius: 5,
    //         height: 30,
    //         width: 50,
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //       }}>
    //       <Text>Post</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       style={{
    //         borderWidth: 1,
    //         borderRadius: 5,
    //         height: 30,
    //         width: 50,
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //       }}>
    //       <Text>Query</Text>
    //     </TouchableOpacity>
    //   </View>
    //   <View
    //     style={{
    //       flex: 50,
    //       flexDirection: 'row',
    //       marginHorizontal: 5,
    //       borderWidth: 1,
    //       borderRadius: 5,
    //     }}>
    //     {data.map(item => (
    //       <Text style={{marginHorizontal: 5}}>{item.tenloaisp}</Text>
    //     ))}
    //   </View>
    // </View>

    // <View style={{flex: 50}}>
    //   {isloading ? (
    //     <ActivityIndicator />
    //   ) : (
    //     <FlatList
    //       style={{}}
    //       data={data}
    //       renderItem={({item}) => (
    //         <View
    //           style={{
    //             flexDirection: 'row',
    //             marginTop: 8,
    //             padding: 5,
    //             shadowColor: '#000',
    //             shadowRadius: 4,
    //             ShadowOpacity: 0.25,
    //             alignItems: 'center',
    //           }}>
    //           <Image
    //             source={{
    //               uri: 'https://media.bibomart.com.vn/resize.460x-/media/catalog/product/b/a/banh-gao-lut-huu-co-pho-mai-bi-do-hinh-que.jpg',
    //             }}
    //             style={{width: 100, height: 100}}
    //             resizeMode="contain"
    //           />
    //           <Text>{item.name}</Text>
    //         </View>
    //       )}
    //       keyExtractor={item => `key-${item.id}`}
    //     />
    //   )}
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
export default Getapi_Flatlist;
