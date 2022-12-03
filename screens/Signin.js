import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';

import {images, icons, fontsize, colors} from '../constant';
import Icons from 'react-native-vector-icons/FontAwesome5';
import {isValiEmail, isValiPassword} from '../utilies/validations';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Taskbar from './Taskbar';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Signin(props) {
  //state for validating
  const [errorEmail, seterrorEmail] = useState('');
  const [errorPassword, seterrorPassword] = useState('');
  // state to store email/password
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  // state keyboard isShow
  const [KeyboardIsShown, setKeyboardIsShown] = useState(false);
  // check condition login
  const isValidationOK = () =>
    email.length > 0 &&
    password.length > 0 &&
    isValiEmail(email) == true &&
    isValiPassword(password) == true;
  // check click enter input yet?
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsShown(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsShown(false);
    });
  });

  //currentuser
  const [email1, setemail1] = useState('anhtu@gmail.com');
  const [password1, setpassword1] = useState('12345');

  const checkuser = (email, email1, password, password1) => {
    return email == email1 && password == password1;
  };
  const {navigation} = props;

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View
        style={{
          flex: 10,
        }}>
        <Taskbar navigation={navigation} title="Signin" user="anhtu" />
      </View>
      <View
        style={{
          flex: 20,
          flexDirection: 'row',
          backgroundColor: 'white',
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
            width: 120,
            height: 100,
            alignItems: 'center',
            borderRadius: 50,
          }}
        />
      </View>
      <View
        style={{
          flex: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: fontsize.h2,
            color: colors.primary,
            fontWeight: 'bold',
          }}>
          LOGIN
        </Text>
      </View>
      <View
        style={{
          flex: 50,
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
                // set errormail with enough condition yet?
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
        </KeyboardAwareScrollView>
        {/* Check KeyboardIsShown == false is keyborad hide and show button */}

        {KeyboardIsShown == false && (
          <View
            style={{
              flex: 60,
              marginHorizontal: 20,
              padding: 20,
            }}>
            <TouchableOpacity
              disabled={isValidationOK() == false}
              onPress={() => {
                AsyncStorage.setItem('username', email);
                AsyncStorage.setItem('password', password);

                {
                  checkuser(email, email1, password, password1) == true &&
                    navigation.navigate('Homescreen');
                }
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
                LOGIN
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('MystackRegister');
              }}>
              <Text
                style={{
                  padding: 10,
                  colors: colors.primary,
                  fontSize: fontsize.h5,
                  alignSelf: 'center',
                }}>
                New user? Register now
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}
export default Signin;
