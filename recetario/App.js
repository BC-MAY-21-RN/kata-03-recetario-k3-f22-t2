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
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <HorizontalList />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <RecipeDetails />
        <Pressable
          style={styles.close}
          onPress={() => setModalVisible(!modalVisible)}>
          <Icon name="close" size={30} color="#ffffff" />
        </Pressable>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BG,
    flex: 1,
    // marginTop: Platform.OS === 'ios' ? 50:0,
  },
  close: {
    position: 'absolute',
    left: 15,
    top: 15,
  },
});
export default App;
