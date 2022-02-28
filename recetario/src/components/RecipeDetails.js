import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../utils/colors';
import React from 'react';
import HeadDetails from './HeadDetails';
import BodyDetails from './BodyDetails';

const RecipeDetails = ({recipe}) => {
  return (
    <View style={styles.container}>
      <View style={styles.platillo}>
        <Image style={styles.image} source={{uri: recipe.image}} />
        <HeadDetails recipeName={recipe.name} />
        <BodyDetails recipeIngredients={recipe.ingredients} />
      </View>
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
    resizeMode: 'cover',
  },
  platillo: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
