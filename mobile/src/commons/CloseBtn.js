import React from 'react';
import { EvilIcons } from '@expo/vector-icons';

import HeaderBtn from './HeaderBtn';
import { theme } from '../constants/theme';

const CloseBtn = ({ color, size, ...rest }) => (
  <HeaderBtn {...rest}>
    <EvilIcons color={color} size={size} name="close" />
  </HeaderBtn>
);

CloseBtn.defaultProps = {
  color: theme.color.green,
  size: 18,
};

export default CloseBtn;
