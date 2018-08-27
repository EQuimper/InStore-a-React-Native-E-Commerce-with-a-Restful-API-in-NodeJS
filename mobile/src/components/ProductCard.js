import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import { Feather } from '@expo/vector-icons';

import { productImgs } from '../constants/images';
import { theme } from '../constants/theme';

const ANIM_DURATION = 200;

const BoxAnimated = Animated.createAnimatedComponent(Box);

class ProductCard extends Component {
  state = {
    isHover: false,
    qty: 1,
    cardOpacity: new Animated.Value(1),
    qtyCardOpacity: new Animated.Value(0),
  };

  handlePlusPress = () => {
    this.fadeIn();
    this.setState({ isHover: true });
  };

  handleInc = () => {
    this.setState(s => ({
      qty: s.qty + 1,
    }));
  };

  handleDec = () => {
    this.setState(s => ({
      qty: s.qty - 1,
    }));
  };

  handleClose = () => {
    this.fadeOut();
    this.setState({
      isHover: false,
    });
  };

  fadeIn = () => {
    Animated.parallel([
      Animated.timing(this.state.qtyCardOpacity, {
        toValue: 1,
        duration: ANIM_DURATION,
      }).start(),
      Animated.timing(this.state.cardOpacity, {
        toValue: 0.4,
        duration: ANIM_DURATION,
      }).start(),
    ]);
  };

  fadeOut = () => {
    Animated.parallel([
      Animated.timing(this.state.qtyCardOpacity, {
        toValue: 0,
        duration: ANIM_DURATION,
      }).start(),
      Animated.timing(this.state.cardOpacity, {
        toValue: 1,
        duration: ANIM_DURATION,
      }).start(),
    ]);
  };

  render() {
    const { isHover, qty, cardOpacity, qtyCardOpacity } = this.state;
    return (
      <Box bg="white" w={150} p="sm" position="relative">
        <TouchableWithoutFeedback onPress={this.handleClose}>
          <BoxAnimated o={cardOpacity}>
            <Box mb="sm">
              <Image
                style={styles.img}
                resizeMode="contain"
                source={productImgs.apple}
              />
            </Box>
            <Box>
              <Text left size="sm" bold>
                $1.19 each
              </Text>
              <Text left size="xs">
                Red Apple
              </Text>
              <Text left size="xs" color="greyLight">
                At $10.12/kg
              </Text>
            </Box>
          </BoxAnimated>
        </TouchableWithoutFeedback>
        {!isHover && (
          <TouchableOpacity
            onPress={this.handlePlusPress}
            style={styles.plusBtn}
          >
            <Box
              circle={25}
              style={{
                borderColor: theme.color.green,
                borderWidth: 1,
              }}
              center
              bg={qty > 1 ? 'green' : 'white'}
            >
              {qty > 1 ? (
                <Text color="white" size="sm">
                  {qty}
                </Text>
              ) : (
                <Feather name="plus" size={15} color={theme.color.green} />
              )}
            </Box>
          </TouchableOpacity>
        )}
        {isHover && (
          <BoxAnimated
            shadow={0}
            bg="white"
            position="absolute"
            style={{ top: 10, right: 10, left: 10, zIndex: 99 }}
            radius={6}
            o={qtyCardOpacity}
          >
            <Box dir="row" align="center" justify="between" p="xs">
              {qty > 1 ? (
                <TouchableOpacity onPress={this.handleDec}>
                  <Feather name="minus" color={theme.color.green} size={20} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={this.handleClose}>
                  <Feather name="trash-2" color={theme.color.green} size={20} />
                </TouchableOpacity>
              )}
              <Text>{qty}</Text>
              <TouchableOpacity onPress={this.handleInc}>
                <Feather name="plus" color={theme.color.green} size={20} />
              </TouchableOpacity>
            </Box>
          </BoxAnimated>
        )}
      </Box>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: 120,
    height: 100,
  },
  plusBtn: {
    top: 10,
    right: 5,
    position: 'absolute',
  },
});

export default ProductCard;
