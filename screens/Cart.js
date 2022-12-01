import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import {useRoute} from '@react-navigation/native';
import Taskbar from './Taskbar';
import {colors, fontsize, images} from '../constant';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import NumericInput from 'react-native-numeric-input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function Cart(props) {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 10,
        }}>
        <Taskbar navigation={navigation} title="Giỏ hàng" user="tu" />
      </View>
      <View
        style={{
          backgroundColor: colors.white,
          flex: 70,
        }}>
        <KeyboardAwareScrollView>
          <View
            style={{
              flex: 25,
              flexDirection: 'row',
              marginHorizontal: 10,
              marginVertical: 10,
            }}>
            <View style={{flex: 40}}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: 'cover',
                  borderRadius: 10,
                }}
                source={{
                  uri: 'https://dochoitreem.com/wp-content/uploads/2022/01/Lap-rap-tau-chien-dau-8-in-1-42022-500x480.jpg',
                }}
              />
            </View>
            <View style={{flex: 50}}>
              <Text
                style={{
                  fontSize: fontsize.h4,
                  fontWeight: 'bold',
                  marginBottom: 10,
                }}></Text>
              <Text
                style={{
                  marginBottom: 10,
                  fontSize: fontsize.h4,
                  color: colors.alert,
                  fontWeight: 'bold',
                }}>
                455.000 đ
              </Text>
              <NumericInput
                width={20}
                minValue={0}
                maxValue={100}
                iconSize={100}
                totalWidth={100}
                totalHeight={35}
                step={1}
                height={20}
                valueType="real"
                rounded
                textColor="#000"
                iconStyle={{color: 'black'}}
                value={2}
                onChange={value => console.log(value)}
              />
            </View>
            <View
              style={{
                flex: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity style={{justifyContent: 'center'}}>
                <Image
                  source={images.close}
                  style={{
                    width: 30,
                    height: 30,
                    resizeMode: 'cover',
                    tintColor: 'gray',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flex: 25,
              flexDirection: 'row',
              marginHorizontal: 10,
              marginVertical: 10,
            }}>
            <View style={{flex: 40}}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: 'cover',
                  borderRadius: 10,
                }}
                source={{
                  uri: 'https://dochoitreem.com/wp-content/uploads/2022/04/Rap-tau-cuop-bien-hcim-canh-cut-1240-500x480.jpg',
                }}
              />
            </View>
            <View style={{flex: 50}}>
              <Text
                style={{
                  fontSize: fontsize.h4,
                  fontWeight: 'bold',
                  marginBottom: 10,
                }}>
                Lắp ráp cho bé D373
              </Text>
              <Text
                style={{
                  marginBottom: 10,
                  fontSize: fontsize.h4,
                  color: colors.alert,
                  fontWeight: 'bold',
                }}>
                72.000 đ
              </Text>
              <NumericInput
                width={20}
                minValue={0}
                maxValue={100}
                iconSize={100}
                totalWidth={100}
                totalHeight={35}
                step={1}
                height={20}
                valueType="real"
                rounded
                textColor="#000"
                iconStyle={{color: 'black'}}
                value={1}
                onChange={value => console.log(value)}
              />
            </View>
            <View
              style={{
                flex: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity style={{justifyContent: 'center'}}>
                <Image
                  source={images.close}
                  style={{
                    width: 30,
                    height: 30,
                    resizeMode: 'cover',
                    tintColor: 'gray',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flex: 25,
              flexDirection: 'row',
              marginHorizontal: 10,
              marginVertical: 10,
            }}>
            <View style={{flex: 40}}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: 'cover',
                  borderRadius: 10,
                }}
                source={{
                  uri: 'https://dochoitreem.com/wp-content/uploads/2022/01/Lap-rap-cho-be-D373-500x480.jpg',
                }}
              />
            </View>
            <View style={{flex: 50}}>
              <Text
                style={{
                  fontSize: fontsize.h4,
                  fontWeight: 'bold',
                  marginBottom: 10,
                }}>
                Lắp ráp lâu đài Moira 20037Q
              </Text>
              <Text
                style={{
                  marginBottom: 10,
                  fontSize: fontsize.h4,
                  color: colors.alert,
                  fontWeight: 'bold',
                }}>
                160.000 đ
              </Text>
              <NumericInput
                width={20}
                minValue={0}
                maxValue={100}
                iconSize={100}
                totalWidth={100}
                totalHeight={35}
                step={1}
                height={20}
                valueType="real"
                rounded
                textColor="#000"
                iconStyle={{color: 'black'}}
                value={3}
                onChange={value => console.log(value)}
              />
            </View>
            <View
              style={{
                flex: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity style={{justifyContent: 'center'}}>
                <Image
                  source={images.close}
                  style={{
                    width: 30,
                    height: 30,
                    resizeMode: 'cover',
                    tintColor: 'gray',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flex: 25,
              flexDirection: 'row',
              marginHorizontal: 10,
              marginVertical: 10,
            }}>
            <View style={{flex: 40}}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: 'cover',
                  borderRadius: 10,
                }}
                source={{
                  uri: 'https://dochoitreem.com/wp-content/uploads/2022/07/Lap-rap-robot-va-xe-2-in-1-7019-500x480.jpg',
                }}
              />
            </View>
            <View style={{flex: 50}}>
              <Text
                style={{
                  fontSize: fontsize.h4,
                  fontWeight: 'bold',
                  marginBottom: 10,
                }}>
                Lắp ráp robot và xe 2 in 1 7019
              </Text>
              <Text
                style={{
                  marginBottom: 10,
                  fontSize: fontsize.h4,
                  color: colors.alert,
                  fontWeight: 'bold',
                }}>
                239.000 đ
              </Text>
              <NumericInput
                width={20}
                minValue={0}
                maxValue={100}
                iconSize={100}
                totalWidth={100}
                totalHeight={35}
                step={1}
                height={20}
                valueType="real"
                rounded
                textColor="#000"
                iconStyle={{color: 'black'}}
                value={2}
                onChange={value => console.log(value)}
              />
            </View>
            <View
              style={{
                flex: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity style={{justifyContent: 'center'}}>
                <Image
                  source={images.close}
                  style={{
                    width: 30,
                    height: 30,
                    resizeMode: 'cover',
                    tintColor: 'gray',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
      <View
        style={{
          flex: 20,
        }}>
        <View
          style={{
            flex: 33,
            flexDirection: 'row',
            marginHorizontal: 10,
            marginVertical: 10,
          }}>
          <View style={{flex: 50, justifyContent: 'center'}}>
            <Text>Thành tiền</Text>
          </View>
          <View
            style={{
              flex: 50,
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: fontsize.h3, color: colors.alert}}>
              2.100.000 đ
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 33,
            marginBottom: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Payment');
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
              Tiến hành đặt hàng
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 33,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Homescreen');
            }}
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.inactive,
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
              Tiếp tục mua hàng
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
