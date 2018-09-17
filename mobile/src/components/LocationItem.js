import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { theme } from '../constants/theme';

class LocationItem extends Component {
  state = {};

  handlePress = async () => {
    try {
      const res = await this.props.fetchDetails(this.props.place_id);

      this.props.searchAddress(res);
    } catch (error) {
      throw error;
    }
  };

  render() {
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Box
          w={1}
          style={{
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: theme.color.greyLight,
          }}
        >
          <Box p={10}>
            <Text>{this.props.description}</Text>
          </Box>
        </Box>
      </TouchableOpacity>
    );
  }
}

export default LocationItem;
