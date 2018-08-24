import React, { PureComponent } from 'react';
import { Image } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

class CategoryCard extends PureComponent {
  state = {};
  render() {
    const { title, image } = this.props;
    return (
      <Box center f={1}>
        {image && (
          <Box center mb="sm">
            <Image source={image} />
          </Box>
        )}
        <Box center>
          <Text size="sm" center capitalizeEach color="greyDarker">
            {title}
          </Text>
        </Box>
      </Box>
    );
  }
}

export default CategoryCard;
