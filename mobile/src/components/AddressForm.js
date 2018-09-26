import React, { Component } from 'react';
import {
  StatusBar,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import { observer, inject } from 'mobx-react/native';
import { observable, action, computed } from 'mobx';
import get from 'lodash.get';

import CloseBtn from '../commons/CloseBtn';
import Input from '../commons/Input';
import Button from '../commons/Button';
import { theme } from '../constants/theme';
import { buildAddress } from '../utils/buildAddress';

@inject('authStore')
@observer
class AddressForm extends Component {
  @observable
  address = get(this.props, 'address', null);

  @observable
  isSaving = false;

  @computed
  get streetName() {
    return get(this.address, 'street', '');
  }

  @computed
  get city() {
    return get(this.address, 'city', '');
  }

  @computed
  get postalCode() {
    return get(this.address, 'postalCode', '');
  }

  goToSearch = () => {
    this.props.navigation.navigate('AutocompleteAddress', {
      searchAddress: this.searchAddress,
    });
  };

  @action.bound
  searchAddress(value) {
    this.props.navigation.goBack(null);

    const address = buildAddress(value);

    this.address = address;
  }

  @action.bound
  async saveAddress() {
    this.isSaving = true;
    try {
      await this.props.save(this.address);
    } catch (error) {
      console.log('error', error);
    }
  }

  render() {
    const { editMode } = this.props;

    if (this.isSaving) {
      return (
        <Box f={1} bg="white" center>
          <ActivityIndicator color={theme.color.green} size="large" />
        </Box>
      );
    }

    return (
      <Box f={1} bg="white" p="sm">
        <StatusBar barStyle="dark-content" />
        <ScrollView>
          <Box mb="sm">
            <Input
              placeholder="Street Address"
              editable={false}
              onPress={this.goToSearch}
              value={this.streetName}
            />
            <Input placeholder="Apt # (optional)" />
            <Box dir="row">
              <Box f={1}>
                <Input
                  placeholder="Postal Code"
                  editable={false}
                  value={this.postalCode}
                />
              </Box>
              <Box w={theme.space.xs} />
              <Box f={1}>
                <Input placeholder="City" editable={false} value={this.city} />
              </Box>
            </Box>
            <Input
              placeholder="Instructions for delivery (optional)"
              containerStyle={{ height: 100 }}
              multiline
            />
          </Box>

          <Button
            disabled={!this.address}
            disabledStyle={styles.buttonDisabled}
            style={styles.button}
            onPress={this.saveAddress}
          >
            <Text bold color="white">
              {editMode ? 'Edit' : 'Save'}
            </Text>
          </Button>

          {editMode && (
            <Button
              disabled={!this.address}
              disabledStyle={styles.buttonDisabled}
              style={styles.deleteButton}
              onPress={this.props.deleteAddress}
            >
              <Text bold color="white">
                Delete
              </Text>
            </Button>
          )}
        </ScrollView>
      </Box>
    );
  }
}

const styles = StyleSheet.create({
  buttonDisabled: {
    backgroundColor: theme.color.greyLight,
    borderColor: theme.color.greyLight,
  },
  button: {
    backgroundColor: theme.color.green,
  },
  deleteButton: {
    backgroundColor: theme.color.red,
    borderColor: theme.color.red,
    marginTop: 20,
  },
});

export default AddressForm;
