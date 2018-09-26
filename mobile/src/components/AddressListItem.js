import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { observer } from 'mobx-react/native';
import { Box, Text } from 'react-native-design-utility';

import { theme } from '../constants/theme';
import { NavigationService } from '../api/NavigationService';

@observer
class AddressListItem extends Component {
  state = {};

  handlePress = () => {
    NavigationService.navigate('EditAddress', { address: this.props.address });
  };

  render() {
    const { address } = this.props;
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Box
          h={50}
          px="sm"
          justify="center"
          style={{
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: theme.color.grey,
          }}
        >
          <Text>{address.street}</Text>
        </Box>
      </TouchableOpacity>
    );
  }
}

export default AddressListItem;
