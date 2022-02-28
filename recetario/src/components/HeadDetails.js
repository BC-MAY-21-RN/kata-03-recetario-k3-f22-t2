import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HeadDetails = ({recipe}) => {
  return (
    <View style={styles.head}>
      <Text style={styles.subtitle}>{recipe.category}</Text>
      <Text style={styles.title}>{recipe.name}</Text>
    </View>
  );
};

export default HeadDetails;

const styles = StyleSheet.create({
  head: {
    position: 'absolute',
    bottom: 350,
    left: 25,
  },
  title: {
    fontSize: 39,
    color: 'white',
  },
  subtitle: {
    color: 'white',
    fontSize: 25,
    textTransform: 'uppercase',
  },
});
