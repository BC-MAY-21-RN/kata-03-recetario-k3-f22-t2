import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import recipes from '../utils/recipes';
import colors from '../utils/colors';
import CarrouselRecipes from './CarrouselRecipes';

const HorizontalList = () => {
  const Trending = recipes.filter(recipe => recipe.category == 'Trending');
  const Recent = recipes.filter(recipe => recipe.category == 'Recent');
  const [favRecipes, setFavRecipes] = useState([]);

  const Favorite = recipes.filter(recipe => favRecipes.includes(recipe.id));
  return (
    <ScrollView>
      <CarrouselRecipes
        recipesList={Trending}
        title="Trending"
        favRecipes={favRecipes}
        setFavRecipes={setFavRecipes}
        sizeRecipe="small"
      />
      <CarrouselRecipes
        recipesList={Recent}
        title="Recent"
        favRecipes={favRecipes}
        setFavRecipes={setFavRecipes}
        sizeRecipe="medium"
      />
      {Favorite.length > 0 && (
        <CarrouselRecipes
          recipesList={Favorite}
          title="Favorites"
          favRecipes={favRecipes}
          setFavRecipes={setFavRecipes}
          sizeRecipe="medium"
        />
      )}
    </ScrollView>
  );
};

export default HorizontalList;

const styles = StyleSheet.create({
  title: {
    color: colors.TITLE,
    fontSize: 25,
    paddingBottom: 10,
  },
});
