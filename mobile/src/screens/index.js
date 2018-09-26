import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import React, { Component } from 'react';

import { NavigationService } from '../api/NavigationService';
import { theme } from '../constants/theme';
import TabBar from '../components/TabBar';
import ShoppingCartIcon from '../components/ShoppingCartIcon';

const primaryHeader = {
  headerStyle: {
    backgroundColor: theme.color.green,
  },
  headerTintColor: theme.color.white,
  headerTitleStyle: {
    fontWeight: '400',
  },
};

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

const ShoppingCartNavigator = createStackNavigator({
  ShoppingCart: {
    getScreen: () => require('./ShoppingCartScreen').default,
    navigationOptions: {
      headerStyle: {
        backgroundColor: theme.color.white,
      },
    },
  },
});

const ProfileStack = createStackNavigator(
  {
    Profile: {
      getScreen: () => require('./ProfileScreen').default,
    },
    Settings: {
      getScreen: () => require('./SettingsScreen').default,
    },
    Addresses: {
      getScreen: () => require('./AddressesScreen').default,
    },
  },
  {
    navigationOptions: {
      headerBackTitle: null,
      headerTintColor: theme.color.green,
      headerStyle: {
        backgroundColor: theme.color.white,
      },
      headerTitleStyle: {
        color: theme.color.black,
      },
    },
  },
);

const AddressFormStack = createStackNavigator(
  {
    CreateAddress: {
      getScreen: () => require('./CreateAddressScreen').default,
    },
    EditAddress: {
      getScreen: () => require('./EditAddressScreen').default,
    },
    AutocompleteAddress: {
      getScreen: () => require('./AutocompleteAddressScreen').default,
    },
  },
  {
    navigationOptions: {
      headerBackTitle: null,
      headerTintColor: theme.color.green,
      headerStyle: {
        backgroundColor: theme.color.white,
      },
      headerTitleStyle: {
        color: theme.color.black,
      },
    },
  },
);

const HomeStack = createStackNavigator(
  {
    Home: {
      getScreen: () => require('./HomeScreen').default,
    },
    Category: {
      getScreen: () => require('./CategoryScreen').default,
    },
    ShoppingCart: {
      screen: ShoppingCartNavigator,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    navigationOptions: { ...primaryHeader, headerRight: <ShoppingCartIcon /> },
  },
);

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  console.log('navigation', navigation);

  if (
    NavigationService.getCurrentRouteName(navigation.state) === 'ShoppingCart'
  ) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
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
    Profile: ProfileStack,
    AddressForm: AddressFormStack,
  },
  {
    mode: 'modal',
    navigationOptions: {
      header: null,
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
