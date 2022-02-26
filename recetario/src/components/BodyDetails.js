import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import Ingredient from './Ingredient';

const BodyDetails = ({recipeIngredients}) => {
  return (
    <View>
      <View>
        <Text style={styles.colorIngredient}>Ingredients</Text>
        <Text style={styles.colorIngredient}>for 3 Servings</Text>
      </View>
      <View>
        <FlatList
            data={recipeIngredients}
            renderItem={({item}) => <Ingredient ingredients={item} />}
            showsHorizontalScrollIndicator={true}
            keyExtractor={ingredients => ingredients.id}
          />
      </View>
    </View>
  );
};

export default BodyDetails;

const styles = StyleSheet.create({
  colorIngredient: {color: 'white'},
});
