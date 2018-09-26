import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import { Alert } from 'react-native';
import { action } from 'mobx';
import { inject } from 'mobx-react/native';

import CloseBtn from '../commons/CloseBtn';
import AddressForm from '../components/AddressForm';

@inject('authStore')
class EditAddressScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Edit Address',
    headerLeft: (
      <CloseBtn left size={25} onPress={() => navigation.dismiss()} />
    ),
  });

  @action.bound
  async save(data) {
    try {
      const address = this.props.navigation.getParam('address');

      await address.updateAddress(data);

      this.props.navigation.dismiss();
    } catch (error) {
      console.log('error', error);
    }
  }

  deleteAddress = () => {
    try {
      const address = this.props.navigation.getParam('address');

      Alert.alert(
        'Are you sure?',
        '',
        [
          {
            text: 'Yes',
            onPress: async () => {
              await address.deleteAddress();

              this.props.navigation.dismiss();
            },
          },
          {
            text: 'Cancel',
            style: 'cancel',
          },
        ],
        { cancelable: true },
      );
    } catch (error) {
      console.log('error', error);
    }
  };

  render() {
    return (
      <Box f={1}>
        <AddressForm
          editMode
          navigation={this.props.navigation}
          address={this.props.navigation.getParam('address')}
          save={this.save}
          deleteAddress={this.deleteAddress}
        />
      </Box>
    );
  }
}

export default EditAddressScreen;
