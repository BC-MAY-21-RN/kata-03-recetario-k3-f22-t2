import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../utils/colors';
import React from 'react';
import HeadDetails from './HeadDetails';
import BodyDetails from './BodyDetails';

const RecipeDetails = ({recipe}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: recipe.image}} />
      <HeadDetails recipe={recipe} />
      <BodyDetails recipe={recipe} />
    </View>
  );
};

export default RecipeDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG,
  },
  image: {
    height: '50%',
    opacity: 0.4,
  },
});
