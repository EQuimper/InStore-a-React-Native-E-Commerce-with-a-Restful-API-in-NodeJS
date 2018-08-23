import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import React, { Component } from 'react';

import { NavigationService } from '../api/NavigationService';
import { theme } from '../constants/theme';
import TabBar from '../components/TabBar';

const AuthNavigator = createStackNavigator(
  {
    Login: {
      getScreen: () => require('./LoginScreen').default,
    },
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      getScreen: () => require('./HomeScreen').default,
    },
    List: {
      getScreen: () => require('./ListScreen').default,
    },
    Stores: {
      getScreen: () => require('./StoresScreen').default,
    },
    Order: {
      getScreen: () => require('./OrderScreen').default,
    },
  },
  {
    tabBarComponent: props => <TabBar {...props} />,
  },
);

const MainNavigator = createStackNavigator(
  {
    Tab: TabNavigator,
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: theme.color.green,
      },
    },
  },
);

const AppNavigator = createSwitchNavigator(
  {
    Splash: {
      getScreen: () => require('./SplashScreen').default,
    },
    Auth: AuthNavigator,
    Main: MainNavigator,
  },
  {
    initialRouteName: 'Splash',
  },
);

class Navigation extends Component {
  state = {};
  render() {
    return (
      <AppNavigator ref={r => NavigationService.setTopLevelNavigator(r)} />
    );
  }
}

export default Navigation;
