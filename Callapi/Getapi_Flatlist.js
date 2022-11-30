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
import {colors, fontsize} from '../constant';
import axios from 'axios';

const URL1 = 'https://jsonplaceholder.typicode.com/users';
function Getapi_Flatlist() {
  const URL = 'http://192.168.1.7/serverAppCk/getsanpham.php';
  const URL_themhh = 'http://192.168.1.7/serverAppCk/themhanghoa.php';
  const [data, setdata] = useState([]);

  const [isloading, setisloading] = useState(true);

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
    axios
      .get(URL, {
        params: {
          page: 1,
          idloaisp: 1,
        },
      })
      //them hang hoa
      // .get(URL, {
      //   params: {
      //     tensanpham: 'Xe tải đỏ 899-2H',
      //     soluong: '20',
      //     gia: '185000',
      //     anh: 'https://dochoitreem.com/wp-content/uploads/2022/09/Xe-tai-do-889-2H-500x480.jpg',
      //     mota: 'Sản phẩm được làm từ chất liệu an toàn không gây độc hại cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.',
      //     iddanhmuc: '1',
      //   },
      // })
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

  const calladdProduct = async () => {
    axios
      // them hang hoa
      .get(URL_themhh, {
        params: {
          tensanpham: 'Xe tải đỏ 899-2H',
          soluong: '20',
          gia: '185000',
          anh: 'https://dochoitreem.com/wp-content/uploads/2022/09/Xe-tai-do-889-2H-500x480.jpg',
          mota: 'Sản phẩm được làm từ chất liệu an toàn không gây độc hại cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.',
          iddanhmuc: '1',
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

  // const renderItem = ({item}) => (
  //   <View key={item.key}>
  //     <Text>{item.title}</Text>
  //   </View>
  // );
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
  // getListViewItem = item => {
  //   Alert.alert(item.key);
  // };

  return (
    <View style={styles.container}>
      <View style={{flex: 90}}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => alert(item.tenhang)}>
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
                    uri: item.anh,
                  }}
                  style={{width: 100, height: 100}}
                  resizeMode="contain"
                />
                <Text>{item.tenhang}</Text>
              </View>
            </TouchableOpacity>

            // <Text style={styles.item}>{item.tenloaisp}</Text>
          )}
        />
      </View>
      <View style={{flex: 10}}>
        <TouchableOpacity
          onPress={() => {
            calladdProduct();
          }}
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.alert,
            borderRadius: 40,
            borderColor: colors.primary,
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
    </View>
  );
  // return(
  //   // <View
  //   //   style={{
  //   //     flex: 1,
  //   //   }}>
  //   //   <View
  //   //     style={{
  //   //       flex: 50,
  //   //       flexDirection: 'row',
  //   //       justifyContent: 'center',
  //   //       alignItems: 'center',
  //   //     }}>
  //   //     <TouchableOpacity
  //   //       onPress={calGetUrl}
  //   //       style={{
  //   //         borderWidth: 1,
  //   //         borderRadius: 5,
  //   //         height: 30,
  //   //         width: 50,
  //   //         justifyContent: 'center',
  //   //         alignItems: 'center',
  //   //       }}>
  //   //       <Text>GET</Text>
  //   //     </TouchableOpacity>
  //   //     <TouchableOpacity
  //   //       style={{
  //   //         borderWidth: 1,
  //   //         borderRadius: 5,
  //   //         height: 30,
  //   //         width: 90,
  //   //         justifyContent: 'center',
  //   //         alignItems: 'center',
  //   //       }}>
  //   //       <Text>GET With ID</Text>
  //   //     </TouchableOpacity>
  //   //     <TouchableOpacity
  //   //       style={{
  //   //         borderWidth: 1,
  //   //         borderRadius: 5,
  //   //         height: 30,
  //   //         width: 50,
  //   //         justifyContent: 'center',
  //   //         alignItems: 'center',
  //   //       }}>
  //   //       <Text>Post</Text>
  //   //     </TouchableOpacity>
  //   //     <TouchableOpacity
  //   //       style={{
  //   //         borderWidth: 1,
  //   //         borderRadius: 5,
  //   //         height: 30,
  //   //         width: 50,
  //   //         justifyContent: 'center',
  //   //         alignItems: 'center',
  //   //       }}>
  //   //       <Text>Query</Text>
  //   //     </TouchableOpacity>
  //   //   </View>
  //   //   <View
  //   //     style={{
  //   //       flex: 50,
  //   //       flexDirection: 'row',
  //   //       marginHorizontal: 5,
  //   //       borderWidth: 1,
  //   //       borderRadius: 5,
  //   //     }}>
  //   //     {data.map(item => (
  //   //       <Text style={{marginHorizontal: 5}}>{item.tenloaisp}</Text>
  //   //     ))}
  //   //   </View>
  //   // </View>

  //   // <View style={{flex: 50}}>
  //   //   {isloading ? (
  //   //     <ActivityIndicator />
  //   //   ) : (
  //   //     <FlatList
  //   //       style={{}}
  //   //       data={data}
  //   //       renderItem={({item}) => (
  //   //         <View
  //   //           style={{
  //   //             flexDirection: 'row',
  //   //             marginTop: 8,
  //   //             padding: 5,
  //   //             shadowColor: '#000',
  //   //             shadowRadius: 4,
  //   //             ShadowOpacity: 0.25,
  //   //             alignItems: 'center',
  //   //           }}>
  //   //           <Image
  //   //             source={{
  //   //               uri: 'https://media.bibomart.com.vn/resize.460x-/media/catalog/product/b/a/banh-gao-lut-huu-co-pho-mai-bi-do-hinh-que.jpg',
  //   //             }}
  //   //             style={{width: 100, height: 100}}
  //   //             resizeMode="contain"
  //   //           />
  //   //           <Text>{item.name}</Text>
  //   //         </View>
  //   //       )}
  //   //       keyExtractor={item => `key-${item.id}`}
  //   //     />
  //   //   )}
  //   // </View>
  // )
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
