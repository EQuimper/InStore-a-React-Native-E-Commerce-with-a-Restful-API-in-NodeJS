import React from 'react';
import { TouchableOpacity } from 'react-native';

const MARGIN_SIZE = 8;

const HeaderBtn = ({ children, left, right, onPress, style }) => {
  let _style = {};

  if (left) {
    _style.marginLeft = MARGIN_SIZE;
  } else if (right) {
    _style.marginRight = MARGIN_SIZE;
  }

  return (
    <TouchableOpacity style={[_style, style]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default HeaderBtn;
