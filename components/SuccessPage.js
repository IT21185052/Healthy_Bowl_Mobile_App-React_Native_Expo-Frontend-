import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity,Modal,FlatList,Image,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


const SuccessPage = () => {
    const navigation = useNavigation();

    const handleNext = () => {
      // Add any logic you need before navigating to the selection page
      navigation.navigate('Home');
    };

    const handleDetails = () => {
      // Add any logic you need before navigating to the selection page
      navigation.navigate('DetailsPage');
    };

  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
      <View style={styles.titleBarLine}></View>
        {/* Title Bar Content */}
        <Text style={styles.titleText}>Order Placed !</Text>
        <View style={styles.movingBarLine}></View>
      </View>
   <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={handleNext} style={styles.button}>
          <Text style={styles.buttonItemText}>Home</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={handleDetails} style={styles.buttonb}>
          <Text style={styles.buttonItemTextb}>Order Details</Text>
        </TouchableOpacity>
        </View>
      </View>

      
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
      },
      
      titleBar: {
        backgroundColor: 'white', // Background color for the title bar
        padding: 10,
        alignItems: 'center',
       
      },
      titleText: {
        color: 'black', // Text color for the title
        fontSize: 20, // Adjust the font size as needed
        marginTop:260,
        fontWeight: 'bold',
      },
      titleBarLine: {
        height: 3,
        backgroundColor: 'black',
        width: '120%',
        top:250,
        position: 'absolute',
      },
      movingBarLine: {
        height: 3,
        backgroundColor: 'black',
        width: '120%',
        position: 'absolute',
        bottom: 0,
      },
      
      buttonContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
      button: {
        backgroundColor: 'white',
        width: 300,
        height: 50,
        padding: 10,
        marginTop : 50,
        bottom:10,
        marginLeft: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonb: {
        backgroundColor: '#8b4513',
        width: 300,
        height: 60,
        padding: 10,
        marginTop : 20,
        bottom:10,
        marginLeft: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonText: {
        fontWeight: 'bold',
        fontSize: 13,
        color: 'white',
        padding: 11,
        marginTop: -14,
      },
      buttonin: {
        backgroundColor: '#8b4513',
        width: 120,
        height: 30,
        padding: 10,
        marginTop: 5,
        marginLeft: -210,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonItemText: {
        fontWeight: 'bold',
        fontSize: 24,
      },
      buttonItemTextb: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white',
      },
});

export default SuccessPage;
