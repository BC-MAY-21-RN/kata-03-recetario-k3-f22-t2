import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import recipes from '../utils/recipes';
import colors from '../utils/colors';
import CarrouselRecipes from './CarrouselRecipes';

const HorizontalList = () => {
  const Trending = recipes.filter(recipe => recipe.category == 'Trending');
  const Recent = recipes.filter(recipe => recipe.category == 'Recent');
  return (
    <View>
      <CarrouselRecipes recipesList={Trending} title='Trending'/>
      <CarrouselRecipes recipesList={Recent} title='Recent'/>
    </View>
  )
}

export default HorizontalList

const styles = StyleSheet.create({
  title: {
    color: colors.TITLE,
    fontSize: 25,
    paddingBottom: 10
  }
})