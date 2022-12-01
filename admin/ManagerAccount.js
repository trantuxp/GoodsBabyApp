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
import {colors, fontsize, images} from '../constant';
import axios from 'axios';

const URL1 = 'https://jsonplaceholder.typicode.com/users';
function ManagerAccount() {
  const URL = 'http://192.168.1.7/serverAppCk/gettaikhoan.php';
  const URL_themhh = 'http://192.168.1.7/serverAppCk/themhanghoa.php';
  const [data, setdata] = useState([]);

  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    calGetUrl();
  }, [data]);
  const calGetUrl = async () => {
    axios
      .get(URL)

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

  // const calladdProduct = async () => {
  //   axios
  //     // them hang hoa
  //     .get(URL_themhh, {
  //       params: {
  //         tensanpham: 'Lắp ráp Dream 6645B',
  //         soluong: '20',
  //         gia: '85.000',
  //         anh: 'https://dochoitreem.com/wp-content/uploads/2020/12/Lap-rap-Dream-6645B-500x480.jpg',
  //         mota: 'Sản phẩm được làm từ chất liệu an toàn không gây độc hại cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.',
  //         iddanhmuc: '1',
  //       },
  //     })
  //     .then(res => {
  //       // console.log(typeof res.data.data);
  //       setdata(res.data.data);
  //       // console.log(JSON.stringify(res.data.data));
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  //     .finally(function () {
  //       // always executed
  //     });
  // };

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
      <View style={{flex: 80}}>
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
                <Text>{item.tendn}</Text>
                <View style={{alignItems: 'flex-end', flex: 1}}>
                  <Image
                    source={images.close}
                    style={{
                      width: 20,
                      height: 20,
                      tintColor: 'gray',
                    }}></Image>
                </View>
              </View>
            </TouchableOpacity>

            // <Text style={styles.item}>{item.tenloaisp}</Text>
          )}
        />
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
            Thêm Tài khoản
          </Text>
        </TouchableOpacity>
      </View>
    </View>
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
export default ManagerAccount;
