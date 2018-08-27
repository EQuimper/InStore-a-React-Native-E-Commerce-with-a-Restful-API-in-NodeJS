import React, { Component } from 'react';
import { Box } from 'react-native-design-utility';

import ProductCard from '../components/ProductCard';

class CategoryScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name', 'InStore'),
  });

  state = {};
  render() {
    return (
      <Box>
        <ProductCard />
      </Box>
    );
  }
}

export default CategoryScreen;
