import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {images, colors, fontsize} from '../constant';

export default function DrawerContent(props) {
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
  const sizes = 100;
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 80}}>
        <View style={styles.userInfoSection}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              marginBottom: 15,
            }}>
            <Avatar.Image
              source={{
                uri: 'https://media.bibomart.com.vn/resize.460x-/media/catalog/product/b/a/banh-gao-lut-huu-co-pho-mai-bi-do-hinh-que.jpg',
              }}
              size={50}
            />
            <View
              style={{
                marginLeft: 15,
                flexDirection: 'column',
              }}>
              <Title style={styles.title}>John Doe</Title>
            </View>
          </View>
        </View>

        <DrawerContentScrollView {...props}>
          <View style={styles.drawerContent}>
            <Drawer.Section style={styles.drawerSection}>
              {products.map(item => (
                <DrawerItem
                  icon={({focused, color}) => (
                    <Image
                      source={{uri: item.imageUrl}}
                      style={{height: 80, width: 80}}
                      resizeMode="contain"
                    />
                  )}
                  label={item.name}
                  onPress={() => {
                    props.navigation.navigate('Cart', {
                      name: 'tu',
                    });
                  }}
                />
              ))}
            </Drawer.Section>
          </View>
        </DrawerContentScrollView>
      </View>
      <View
        style={{
          height: 1,
          borderWidth: 1,
          borderColor: 'black',
          width: '80%',
          justifyContent: 'center',
          alignSelf: 'center',
          marginHorizontal: 10,
          marginVertical: 10,
        }}
      />
      <View style={{flex: 20}}>
        <View style={styles.drawerSection}>
          <DrawerItem
            icon={({focused, color}) => (
              <Image
                source={{
                  uri: 'https://media.bibomart.com.vn/resize.460x-/media/catalog/product/b/a/banh-gao-lut-huu-co-pho-mai-bi-do-hinh-que.jpg',
                }}
                style={{height: 80, width: 80}}
                resizeMode="contain"
              />
            )}
            label="About"
            onPress={() => {
              props.navigation.navigate('Cart', {
                name: 'tu',
              });
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    backgroundColor: colors.primary,

    paddingLeft: 20,
  },
  title: {
    fontSize: fontsize.h2,
    color: 'white',
    marginTop: 5,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
