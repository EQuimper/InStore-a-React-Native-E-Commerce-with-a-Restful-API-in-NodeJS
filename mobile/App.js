import React from 'react';
import { ActivityIndicator } from 'react-native';
import { UtilityThemeProvider, Box } from 'react-native-design-utility';

import Navigation from './src/screens';
import { images } from './src/constants/images';
import { cacheImages } from './src/utils/cacheImages';
import { theme } from './src/constants/theme';

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  componentDidMount() {
    this.cacheAssets();
  }

  cacheAssets = async () => {
    const imagesAssets = cacheImages(Object.values(images));

    await Promise.all([...imagesAssets]);

    this.setState({ isReady: true });
  };

  render() {
    if (!this.state.isReady) {
      return (
        <Box f={1} center bg="white">
          <ActivityIndicator size="large" />
        </Box>
      );
    }
    return (
      <UtilityThemeProvider theme={theme}>
        <Navigation />
      </UtilityThemeProvider>
    );
  }
}
