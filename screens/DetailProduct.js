import {Text, StyleSheet, View, Button} from 'react-native';
import React, {Component} from 'react';

export default class DetailProduct extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Text>DetailProduct</Text>

        <Button
          title="Go back"
          onPress={() => {
            navigation.navigate('Signin');
          }}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
