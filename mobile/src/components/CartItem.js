import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import { Feather } from '@expo/vector-icons';

import { theme } from '../constants/theme';

class CartItem extends Component {
  state = {};
  render() {
    const { product } = this.props;
    return (
      <Box dir="row" align="center" p="xs" bg="white">
        <Box f={0.3}>
          <Image
            style={styles.img}
            resizeMode="contain"
            source={product.imageUrl}
          />
        </Box>
        <Box f={1} pl="xs">
          <Box mb="xs">
            <Text bold>{product.name}</Text>
            <Text color="greyDark" size="xs">
              At ${product.kgPrice}
              /kg
            </Text>
          </Box>
          <Box>
            <TouchableOpacity onPress={product.removeFromCart}>
              <Box dir="row" align="center">
                <Feather
                  name="trash-2"
                  color={theme.color.green}
                  size={theme.text.size.sm}
                />
                <Text size="sm" color="greyDark" ml={5}>
                  Remove
                </Text>
              </Box>
            </TouchableOpacity>
          </Box>
        </Box>
        <Box center mr="md">
          <TouchableOpacity>
            <Box
              w={45}
              h={35}
              center
              radius={6}
              style={{ borderWidth: 1, borderColor: theme.color.greyLight }}
            >
              <Text bold>{product.cartQty}</Text>
            </Box>
          </TouchableOpacity>
        </Box>
        <Box>
          <Text>${product.totalPrice}</Text>
        </Box>
      </Box>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 100,
  },
});

export default CartItem;
