import React, { PureComponent } from 'react';
import { Box, Text } from 'react-native-design-utility';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import { theme } from '../constants/theme';
import { NavigationService } from '../api/NavigationService';

const Left = ({ children }) => (
  <Box f={1} align="start">
    {children}
  </Box>
);

const Right = ({ children }) => <Box align="end">{children}</Box>;

class ListColumn extends PureComponent {
  static Left = Left;
  static Right = Right;

  state = {};

  renderContent = () => (
    <Box
      dir="row"
      p="sm"
      align="center"
      justify="between"
      style={{
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: theme.color.greyLight,
      }}
    >
      {this.props.children}
    </Box>
  );

  handlePress = () => {
    NavigationService.navigate(this.props.link);
  };

  render() {
    if (this.props.link) {
      return (
        <TouchableOpacity onPress={this.handlePress}>
          {this.renderContent()}
        </TouchableOpacity>
      );
    }
    return this.renderContent();
  }
}

export default ListColumn;
