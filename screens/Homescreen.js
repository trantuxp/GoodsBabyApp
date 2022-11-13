import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Homescreen(props) {
  const {navigation} = props;

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DetailProduct');
        }}>
        <Text>DetailProduct</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
