import React, { PureComponent } from 'react';
import { Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Box } from 'react-native-design-utility';

const { width: WIDTH } = Dimensions.get('window');

const images = [
  require('../../assets/img/food1.png'),
  require('../../assets/img/food2.png'),
  require('../../assets/img/food3.png'),
];

const DOT_SIZE = 8;
const TIME = 3000;

class DealCaroussel extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
    };

    this.scrollView = React.createRef();
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.handleScroll();
    }, TIME);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleScroll = () => {
    const newIndex = this.state.currentIndex + 1;

    if (newIndex < images.length) {
      this.scrollView.current.scrollTo({
        x: newIndex * WIDTH,
        animated: true,
      });

      this.setState({ currentIndex: newIndex });
    } else {
      this.scrollView.current.scrollTo({
        x: 0,
        animated: true,
      });
      this.setState({ currentIndex: 0 });
    }
  };

  onScroll = event => {
    const { contentOffset } = event.nativeEvent;

    const currentIndex = Math.round(contentOffset.x / WIDTH);

    if (this.state.currentIndex !== currentIndex) {
      this.setState({ currentIndex });
    }
  };

  render() {
    return (
      <Box>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          ref={this.scrollView}
          scrollEventThrottle={16}
          onScroll={this.onScroll}
        >
          {images.map((img, i) => (
            <Box
              key={i}
              position="relative"
              style={{ height: 130, width: WIDTH }}
            >
              <Image source={img} />
              <Box
                position="absolute"
                dir="row"
                style={{ height: 130, width: WIDTH }}
                align="end"
                justify="center"
                pb="xs"
              >
                {Array.from({ length: images.length }).map((_, index) => (
                  <Box
                    key={index}
                    bg={
                      this.state.currentIndex === index
                        ? 'black'
                        : 'transparent'
                    }
                    style={{ borderWidth: 1, borderColor: 'black' }}
                    circle={DOT_SIZE}
                    mx={DOT_SIZE / 2}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </ScrollView>
      </Box>
    );
  }
}

export default DealCaroussel;
