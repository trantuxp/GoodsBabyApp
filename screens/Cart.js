import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';

export default function Cart(props) {
  const {name} = props;
  return (
    <View>
      <Text>{name} : kk</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
