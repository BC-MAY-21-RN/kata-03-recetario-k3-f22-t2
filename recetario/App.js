/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Pressable, Text, Modal} from 'react-native';
import SearchBar from './src/components/SearchBar';
import colors from './src/utils/colors';
import ListItem from './src/components/ListItem';
import HorizontalList from './src/components/HorizontalList';
import RecipeDetails from './src/components/RecipeDetails';
import Icon from 'react-native-vector-icons/FontAwesome';

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
