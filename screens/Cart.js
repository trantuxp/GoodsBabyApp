import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {useRoute} from '@react-navigation/native';

export default function Cart(props) {
  const route = useRoute();
  return (
    <View>
      <Text>{route.params.name} : kk</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
