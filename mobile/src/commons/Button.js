import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { theme } from '../constants/theme';

const Button = ({ children, disabled, onPress, style, disabledStyle }) => {
  const _style = [styles.button];

  if (disabled) {
    _style.push(disabledStyle);
  } else {
    _style.push(style);
  }

  return (
    <TouchableOpacity style={_style} onPress={onPress} disabled={disabled}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: theme.color.green,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    alignSelf: 'center',
    height: 40,
  },
});

export default Button;
