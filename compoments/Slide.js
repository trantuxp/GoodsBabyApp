import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import React, {Component, useState} from 'react';

const images = [
  'https://toplist.vn/images/800px/kclosetvn-648225.jpg',
  'https://zkids.vn/images/companies/1/N%E1%BB%99i%20dung%20trang/qu%E1%BA%A7n%20%C3%A1o%20tr%E1%BA%BB%20em%20gi%C3%A1%20s%E1%BB%89/banner-quan-ao-tre-em-gia-si.jpg?1540634498382',
  'https://bizweb.dktcdn.net/100/302/397/themes/754809/assets/slider_2.jpg?1614149879141',
];

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function Slide() {
  const [imgActive, setimgActive] = useState(0);

  onchange = nativeEvent => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide != imgActive) {
      setimgActive(slide);
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          width: WIDTH,
          height: HEIGHT * 0.25,
        }}>
        <ScrollView
          onScroll={({nativeEvent}) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={{
            width: WIDTH,
            height: HEIGHT * 0.25,
          }}>
          {images.map((e, index) => (
            <Image
              key={e}
              resizeMode="stretch"
              style={{width: WIDTH, height: HEIGHT * 0.25}}
              source={{uri: e}}
            />
          ))}
        </ScrollView>
        <View style={styles.wrapDot}>
          {images.map((e, index) => (
            <Text
              key={e}
              style={imgActive == index ? styles.dotActive : styles.dot}>
              ●
            </Text>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 3,
    color: 'black',
  },
  dot: {
    margin: 3,
    color: 'white',
  },
});
