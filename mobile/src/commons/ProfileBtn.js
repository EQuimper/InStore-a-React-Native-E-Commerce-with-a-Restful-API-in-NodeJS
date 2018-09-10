import React, { PureComponent } from 'react';
import { EvilIcons } from '@expo/vector-icons';

import HeaderBtn from './HeaderBtn';
import { NavigationService } from '../api/NavigationService';

class ProfileBtn extends PureComponent {
  state = {};

  onNavigate = () => {
    NavigationService.navigate('Profile');
  };

  render() {
    return (
      <HeaderBtn left onPress={this.onNavigate}>
        <EvilIcons name="user" color="white" size={35} />
      </HeaderBtn>
    );
  }
}

export default ProfileBtn;
