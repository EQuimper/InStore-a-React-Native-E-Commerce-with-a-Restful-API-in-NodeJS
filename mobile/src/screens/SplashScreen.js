import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';

import OnboardingLogo from '../commons/OnboardingLogo';
import { NavigationService } from '../api/NavigationService';

class SplashScreen extends Component {
  state = {};

  componentDidMount() {
    this.checkAuth();
  }

  checkAuth = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Auth');
    }, 1000);
  };

  render() {
    return (
      <Box f={1} center>
        <OnboardingLogo />
      </Box>
    );
  }
}

export default SplashScreen;
