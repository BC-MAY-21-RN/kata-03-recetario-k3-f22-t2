/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet } from 'react-native';
import SearchBar from './src/components/SearchBar';
import colors from './src/utils/colors';
import HorizontalList from './src/components/HorizontalList';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <HorizontalList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BG,
    flex: 1,
    // marginTop: Platform.OS === 'ios' ? 50:0,
  },
});
export default App;
