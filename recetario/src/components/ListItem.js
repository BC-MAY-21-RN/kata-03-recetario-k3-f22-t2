import { StyleSheet, Text, View, Image, Pressable, Alert, Modal } from 'react-native'
import React, {useState } from 'react'
import RecipeDetails from './RecipeDetails';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListItem = ( {recipe}) => {   
    const [modalVisible, setModalVisible] = useState(false);  
    return (
        <View style={styles.container}>
            <Pressable onPress={() => setModalVisible(true)} >
                <Image style={[recipe.category == 'Trending' ? styles.imgTreding : styles.imgRecent, {borderRadius: 10}]}  source={{ uri: recipe.image}}/>
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
                <Pressable
                style={styles.close}
                onPress={() => setModalVisible(!modalVisible)}>
                <Icon name="close" size={30} color="#ffffff" />
                </Pressable>
            </Modal>
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({
    title: {
        color: 'white',
        marginTop: 5,
        fontSize: 15
    },
    imgTreding:{
        width:   115 , 
        height:  115 ,
    },
    imgRecent: {
        width: 150,
        height: 150,
    },
    container: {
        paddingHorizontal: 10,
        paddingBottom: 15
        
    },
    close: {
        position: 'absolute',
        left: 15,
        top: 15,
    },
});