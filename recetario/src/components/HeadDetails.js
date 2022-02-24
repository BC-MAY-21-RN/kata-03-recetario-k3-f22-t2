import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HeadDetails = () => {
  return (
    <View style={styles.head}>
      <Text style={styles.subtitle}>TRENDING</Text>
      <Text style={styles.title}>Arroz Rojo</Text>
    </View>
  );
};

export default HeadDetails;

const styles = StyleSheet.create({
  head: {
    position: 'relative',
    bottom: 120,
    left: 25,
  },
  title: {
    fontSize: 39,
    color: 'white',
  },
  subtitle: {
    color: 'white',
    fontSize: 25,
  },
});
