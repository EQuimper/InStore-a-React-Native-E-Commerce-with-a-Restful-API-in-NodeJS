import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import { inject, observer } from 'mobx-react/native';

import { images } from '../constants/images';
import { NavigationService } from '../api/NavigationService';

@inject('shoppingCartStore')
@observer
class ShoppingCartIcon extends Component {
  handlePress = () => {
    NavigationService.navigate('ShoppingCart');
  };

  render() {
    const { shoppingCartStore } = this.props;
    const { totalProducts } = shoppingCartStore;
    return (
      <TouchableOpacity onPress={this.handlePress} style={styles.btn}>
        <Box mr={16}>
          <Image
            style={styles.img}
            resizeMode="contain"
            source={images.shoppingCart}
          />
        </Box>
        {totalProducts > 0 && (
          <Box
            style={{ top: -2, right: 10 }}
            position="absolute"
            circle={15}
            bg="red"
            center
          >
            <Text color="white" bold size={8}>
              {totalProducts}
            </Text>
          </Box>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: 25,
  },
  btn: {
    flex: 1,
    position: 'relative',
  },
});

export default ShoppingCartIcon;
