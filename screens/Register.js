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
} from 'react-native';

import image from '../constant/images';
import {images, icons, fontsize, colors, CallURL} from '../constant';
import Icons from 'react-native-vector-icons/FontAwesome5';
import {UIButton} from '../compoments';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  isValiEmail,
  isValiPassword,
  isValiRePassword,
} from '../utilies/validations';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Taskbar from './Taskbar';
import axios from 'axios';

function Register(props) {
  //state for validating
  const [errorEmail, seterrorEmail] = useState('');
  const [errorPassword, seterrorPassword] = useState('');
  const [errorRePassword, seterrorRePassword] = useState('');

  // state to store email/password
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [repassword, setrepassword] = useState('');
  // state keyboard isShow
  const [KeyboardIsShown, setKeyboardIsShown] = useState(false);

  const {navigation} = props;
  const isValidationOK = () =>
    email.length > 0 &&
    password.length > 0 &&
    isValiEmail(email) == true &&
    isValiPassword(password) == true &&
    isValiRePassword(repassword, password) == true;
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsShown(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsShown(false);
    });
  });

  const calladdAccount = async (tendn, matkhau) => {
    axios
      // them hang hoa
      .get(CallURL.URL_themtk, {
        params: {
          tendn: tendn,
          matkhau: matkhau,
        },
      })
      .then(res => {
        // console.log(typeof res.data.data);
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
      // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 100,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flex: 10,
        }}>
        <Taskbar navigation={navigation} title="Register" user="anhtu" />
      </View>
      <View
        style={{
          flex: 20,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: fontsize.h1,
            fontWeight: 'bold',
            width: '50%',
          }}>
          Already have an Account?
        </Text>
        <Image
          source={images.computer}
          style={{
            width: 100,
            height: 80,
            alignItems: 'center',
          }}
        />
      </View>
      <View
        style={{
          flex: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: colors.primary,
            fontSize: fontsize.h2,
            fontWeight: 'bold',
          }}>
          REGISTER
        </Text>
      </View>
      <View
        style={{
          flex: 40,
        }}>
        <KeyboardAwareScrollView>
          <View
            style={{
              marginHorizontal: 20,

              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: fontsize.h5,
                color: colors.primary,
              }}>
              Email:
            </Text>
            <TextInput
              onChangeText={text => {
                seterrorEmail(
                  isValiEmail(text) == true
                    ? ''
                    : 'Email not in correct format',
                );
                setemail(text);
              }}
              placeholder="example@gmail.com"
              placeholderTextColor={colors.placeholder}
            />

            <View
              style={{
                height: 1,
                backgroundColor: colors.primary,
              }}
            />

            <Text
              style={{
                color: 'red',
                fontSize: fontsize.h5,
                marginTop: 5,
              }}>
              {errorEmail}
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 20,

              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: fontsize.h5,
                color: colors.primary,
              }}>
              Password:
            </Text>
            <TextInput
              onChangeText={text => {
                seterrorPassword(
                  isValiPassword(text) == true
                    ? ''
                    : 'Password must be at least 3 characters',
                );
                setpassword(text);
              }}
              style={{
                marginBottom: 5,
              }}
              secureTextEntry={true}
              placeholder="Enter your Passworđ"
              placeholderTextColor={colors.placeholder}
            />
            <View
              style={{
                height: 1,
                backgroundColor: colors.primary,
              }}
            />
            <Text
              style={{
                color: 'red',
                fontSize: fontsize.h5,
                marginTop: 5,
              }}>
              {errorPassword}
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 20,

              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: fontsize.h5,
                color: colors.primary,
              }}>
              Repasswprd:
            </Text>
            <TextInput
              style={{}}
              onChangeText={text => {
                seterrorRePassword(
                  isValiRePassword(text, password) == true
                    ? ''
                    : 'Confirm password is not same as password ',
                );
                setrepassword(text);
              }}
              secureTextEntry={true}
              placeholder="Enter Your password again"
              placeholderTextColor={colors.placeholder}
            />
            <View
              style={{
                height: 1,
                backgroundColor: colors.primary,
              }}
            />
            <Text
              style={{
                color: 'red',
                fontSize: fontsize.h5,
                marginTop: 5,
              }}>
              {errorRePassword}
            </Text>
          </View>
        </KeyboardAwareScrollView>
      </View>

      <View
        style={{
          flex: 20,
          justifyContent: 'center',
        }}>
        {KeyboardIsShown == false && (
          <View>
            <TouchableOpacity
              disabled={isValidationOK() == false}
              onPress={() => {
                calladdAccount(email, password);

                AsyncStorage.setItem('username', email);
                AsyncStorage.setItem('password', password);
                dataUser.map(Item => {
                  if (email == Item.tendn && password == Item.matkhau) {
                    AsyncStorage.setItem('id', Item.id);
                  }
                });

                navigation.navigate('Homescreen');
                // alert(`Email = ${email},password = ${password}`);
              }}
              title="LOGIN"
              style={{
                width: '50%',
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:
                  isValidationOK() == true ? colors.primary : colors.inactive,
                borderRadius: 40,
                borderColor: colors.primary,
                borderWidth: 1,
                height: 40,
                borderRadius: 40,
                padding: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: fontsize.h5,
                }}>
                REGISTER
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('MystackSignin');
              }}>
              <Text
                style={{
                  padding: 10,
                  colors: colors.primary,
                  fontSize: fontsize.h5,
                  alignSelf: 'center',
                }}>
                You have a Account?
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}
export default Register;
