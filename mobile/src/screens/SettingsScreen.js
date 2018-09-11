import React, { Component } from 'react';
import { StatusBar, ScrollView } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import { EvilIcons, MaterialIcons } from '@expo/vector-icons';

import { theme } from '../constants/theme';
import ListColumn from '../commons/ListColumn';

const baseIconStyle = {
  size: 25,
  color: theme.color.grey,
};

const LINKS = [
  {
    link: 'EditUserInfo',
    title: 'Your name and email',
    icon: <EvilIcons name="user" {...baseIconStyle} />,
  },
  {
    link: 'Addresses',
    title: 'Addresses',
    icon: <EvilIcons name="location" {...baseIconStyle} />,
  },
];

class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'Account Settings',
  };
  state = {};
  render() {
    return (
      <Box f={1} bg="white">
        <StatusBar barStyle="dark-content" />
        <ScrollView>
          {LINKS.map(el => (
            <ListColumn link={el.link} key={el.title}>
              <ListColumn.Left>
                <Box dir="row" align="center">
                  <Box f={0.2}>{el.icon}</Box>

                  <Box f={1}>
                    <Text>{el.title}</Text>
                  </Box>
                </Box>
              </ListColumn.Left>
              <ListColumn.Right>
                <MaterialIcons name="keyboard-arrow-right" {...baseIconStyle} />
              </ListColumn.Right>
            </ListColumn>
          ))}
        </ScrollView>
      </Box>
    );
  }
}

export default SettingsScreen;
