import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ingredient from './Ingredient';

const BodyDetails = () => {
  return (
    <View>
      <View>
        <Text style={styles.colorIngredient}>Ingredients</Text>
        <Text style={styles.colorIngredient}>for 3 Servings</Text>
      </View>
      <View>
        <Ingredient />
        <Ingredient />
      </View>
    </View>
  );
};

export default BodyDetails;

const styles = StyleSheet.create({
  colorIngredient: {color: 'white'},
});
