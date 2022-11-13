import {Text, StyleSheet, View, Image, ActivityIndicator} from 'react-native';
import React, {Component, useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList} from 'react-native-gesture-handler';

function Getapi_Flatlist() {
  const [data, setdata] = useState([]);
  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    getListPhotos();
    return () => {};
  });

  getListPhotos = () => {
    const apiURL = 'http://192.168.1.9/serverAppCk/getloaisp.php';
    fetch(apiURL)
      .then(res => res.json())
      .then(resJson => {
        setdata(resJson);
      })
      .catch(error => {
        console.log('Error', error);
      })
      .finally(() => setisloading(false));
  };
  renderItem = ({item, index}) => {
    return (
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
          source={{uri: item.hinhloaisp}}
          style={{width: 100, height: 100}}
          resizeMode="contain"
        />
        <Text>{item.tenloaisp}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      {isloading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          style={{}}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => `key-${item.id}`}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
export default Getapi_Flatlist;
