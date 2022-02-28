import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import Ingredient from './Ingredient';

const BodyDetails = ({recipe}) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.colorIngredient}>Ingredients</Text>
        <Text style={styles.colorIngredient}>
          for {recipe.servings} Servings
        </Text>
      </View>

      <FlatList
        data={recipe.ingredients}
        renderItem={({item}) => <Ingredient ingredients={item} />}
        keyExtractor={ingredients => ingredients.id}
      />
    </View>
  );
};

export default BodyDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginVertical: 30,
  },
  colorIngredient: {
    color: 'white',
    left: 22,
    fontSize: 18,
  },
});
