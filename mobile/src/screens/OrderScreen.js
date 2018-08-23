import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

class OrderScreen extends Component {
  state = {};
  render() {
    return (
      <Box f={1} center>
        <StatusBar barStyle="light-content" />
        <Text>Order Screen</Text>
      </Box>
    );
  }
}

export default OrderScreen;
