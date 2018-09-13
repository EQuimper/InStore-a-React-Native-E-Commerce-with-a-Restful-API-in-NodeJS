import React from 'react';
import { Box, Text } from 'react-native-design-utility';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';
import {
  TextInput,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import { GOOGLE_API_KEY } from '../constants';
import { theme } from '../constants/theme';
import LocationItem from '../components/LocationItem';

const AutocompleteAddressScreen = ({ navigation }) => (
  <Box f={1} bg="white">
    <GoogleAutoComplete apiKey={GOOGLE_API_KEY} components="country:ca">
      {({
        handleTextChange,
        inputValue,
        locationResults,
        isSearching,
        fetchDetails,
      }) => (
        <React.Fragment>
          <Box h={40} w={1} center mt={10}>
            <Box bg="greyLighter" radius={6} h="90%" w="90%" p={8}>
              <TextInput
                placeholder="Search address"
                selectionColor={theme.color.green}
                autoFocus
                onChangeText={handleTextChange}
                value={inputValue}
              />
            </Box>
          </Box>

          {isSearching && locationResults.length === 0 ? (
            <Box h={1} w={1} center>
              <ActivityIndicator color={theme.color.green} size="large" />
            </Box>
          ) : (
            <ScrollView style={styles.list}>
              {locationResults.map(location => (
                <LocationItem
                  key={location.id}
                  {...location}
                  fetchDetails={fetchDetails}
                  searchAddress={navigation.getParam('searchAddress')}
                />
              ))}
            </ScrollView>
          )}
        </React.Fragment>
      )}
    </GoogleAutoComplete>
  </Box>
);

AutocompleteAddressScreen.navigationOptions = {
  title: 'Search Address',
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
  },
  list: {
    marginTop: 10,
  },
});

export default AutocompleteAddressScreen;
