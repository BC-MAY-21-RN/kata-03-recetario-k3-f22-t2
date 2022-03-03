import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import colors from '../utils/colors';
import ListItem from './ListItem';

const CarrouselRecipes = ({
  recipesList,
  title,
  favRecipes,
  setFavRecipes,
  sizeRecipe,
}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={recipesList}
        renderItem={({item}) => (
          <ListItem
            recipe={item}
            favRecipes={favRecipes}
            setFavRecipes={setFavRecipes}
            sizeRecipe={sizeRecipe}
          />
        )}
        keyExtractor={recipe => recipe.id}
        showsHorizontalScrollIndicator={true}
      />
    </View>
  );
};

export default CarrouselRecipes;

const styles = StyleSheet.create({
  title: {
    color: colors.TITLE,
    fontSize: 25,
    paddingBottom: 10,
    textTransform: 'uppercase',
  },
});
