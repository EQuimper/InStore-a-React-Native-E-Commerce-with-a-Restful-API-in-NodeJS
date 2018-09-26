import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import { action } from 'mobx';
import { inject } from 'mobx-react/native';

import CloseBtn from '../commons/CloseBtn';
import AddressForm from '../components/AddressForm';

@inject('authStore')
class CreateAddressScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Create Address',
    headerLeft: (
      <CloseBtn left size={25} onPress={() => navigation.dismiss()} />
    ),
  });

  @action.bound
  async save(address) {
    try {
      await this.props.authStore.info.createAddress(address);

      this.props.navigation.dismiss();
    } catch (error) {
      console.log('error', error);
    }
  }

  render() {
    return (
      <Box f={1}>
        <AddressForm navigation={this.props.navigation} save={this.save} />
      </Box>
    );
  }
}

export default CreateAddressScreen;
