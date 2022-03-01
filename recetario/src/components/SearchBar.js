import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../utils/colors.js';

const SearchBar = () => {
    return (
        <View style={styles.inputSearch}>
            <View style={styles.completeSearchBar}> 
                <Icon name="search" size={15} color="#ffffff" /> 
                <TextInput style={styles.textSearch} placeholder="What do you want to eat?" placeholderTextColor="#ffffff"/>
                <Icon name="microphone" size={17} color="#ffffff" />             
             </View>
        </View> 
    )
}

const styles = StyleSheet.create({
    inputSearch: {
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      //marginHorizontal: 40, 
      marginVertical: 30,
    }, 
    textSearch: {
        color: '#ffffff',
        flex: 1,
        paddingVertical: Platform.OS === 'ios' ? 15:8,
        borderRadius: 5,
        paddingLeft: 10

    },
    completeSearchBar: {
        width: '80%',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.BG_SB,
        borderRadius: 8,
        paddingHorizontal: 15,
    }
  })
export default SearchBar;