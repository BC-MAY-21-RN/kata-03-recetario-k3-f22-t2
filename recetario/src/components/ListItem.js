import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Alert,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import RecipeDetails from './RecipeDetails';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListItem = ({recipe, favRecipes, setFavRecipes, sizeRecipe}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const addRecipeToFav = id => {
    // Agregar al state
    const newRecipes = [...favRecipes, id];
    setFavRecipes(newRecipes);
  };

  console.log('sizeRecipe: ' + sizeRecipe);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setModalVisible(true)}>
        <Image
          style={[
            sizeRecipe == 'small' ? styles.imgTreding : styles.imgRecent,
            {borderRadius: 10},
          ]}
          source={{uri: recipe.image}}
        />
      </Pressable>
      <Text style={styles.title}>{recipe.name}</Text>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <RecipeDetails recipe={recipe} />
        <View style={styles.containerIcons}>
          <View style={styles.icons}>
            <Pressable
              style={styles.close}
              onPress={() => setModalVisible(!modalVisible)}>
              <Icon name="close" size={30} color="#ffffff" />
            </Pressable>
            <View style={styles.iconsRight}>
              <Icon name="upload" size={30} color="#ffffff" />
              <Pressable
                style={styles.close}
                onPress={() => addRecipeToFav(recipe.id)}>
                <Icon
                  style={styles.heart}
                  name="heart-o"
                  size={30}
                  color="#ffffff"
                />
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  title: {
    color: 'white',
    marginTop: 5,
    fontSize: 15,
  },
  imgTreding: {
    width: 115,
    height: 115,
  },
  imgRecent: {
    width: 150,
    height: 150,
  },
  container: {
    paddingHorizontal: 10,
    paddingBottom: 15,
  },
  containerIcons: {
    position: 'absolute',
    width: '90%',
    left: 15,
    top: 15,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconsRight: {flexDirection: 'row'},
  heart: {marginLeft: 15},
});
