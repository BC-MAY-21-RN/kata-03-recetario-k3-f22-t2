
 import React, {useState} from 'react';
 import {SafeAreaView, StyleSheet, Pressable, Text, Modal } from 'react-native';
 import colors from '../utils/colors';
 import Icon from 'react-native-vector-icons/FontAwesome';
 
 const MyModal = ({ children, modalVisible }) => {
//   const [modalVisibleF, setModalVisible] = useState(false);   
   return (
     <SafeAreaView style={styles.container}>
       <Modal
         animationType="slide"
         transparent={true}
         visible={modalVisible}
        >
         <View>{children}</View>
         <Pressable
           style={styles.close}
          //  onPress={() => setModalVisible(!modalVisible)}
          >
           <Icon name="close" size={30} color="#ffffff" />
         </Pressable>
       </Modal>
       <Pressable
         style={[styles.button, styles.buttonOpen]}
         onPress={() => setModalVisible(true)}>
         <Text style={styles.textStyle}>Show Modal</Text>
       </Pressable>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     backgroundColor: colors.BG,
     flex: 1,
     // marginTop: Platform.OS === 'ios' ? 50:0,
   },
   close: {
     position: 'absolute',
     left: 15,
     top: 15,
   },
 });
 export default Modal;