import React, { Component } from 'react';
import { TouchableOpacity, Animated } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import { Feather } from '@expo/vector-icons';

import { theme } from '../constants/theme';

const ANIM_DURATION = 200;

const BoxAnimated = Animated.createAnimatedComponent(Box);

class QtyHover extends Component {
  state = {
    opacity: new Animated.Value(0),
  };

  componentDidMount() {
    this.fadeIn();
  }

  componentWillUnmount() {
    this.fadeOut();
  }

  fadeIn = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: ANIM_DURATION,
    }).start();
  };

  fadeOut = () => {
    Animated.timing(this.state.opacity, {
      toValue: 0,
      duration: ANIM_DURATION,
    }).start();
  };

  render() {
    const { opacity } = this.state;
    const { qty, containerStyle } = this.props;
    return (
      <BoxAnimated
        shadow={0}
        bg="white"
        position="absolute"
        style={containerStyle}
        radius={6}
        o={opacity}
      >
        <Box dir="row" align="center" justify="between" p="xs">
          {qty > 1 ? (
            <TouchableOpacity onPress={this.props.handleDec}>
              <Feather name="minus" color={theme.color.green} size={20} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={this.props.handleRemove}>
              <Feather name="trash-2" color={theme.color.green} size={20} />
            </TouchableOpacity>
          )}
          <Text>{qty}</Text>
          <TouchableOpacity onPress={this.props.handleInc}>
            <Feather name="plus" color={theme.color.green} size={20} />
          </TouchableOpacity>
        </Box>
      </BoxAnimated>
    );
  }
}

export default QtyHover;
