import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity,Modal,FlatList,Image,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


const CartPage = () => {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');

    const handleNext = () => {
      // Add any logic you need before navigating to the selection page
      navigation.navigate('SuccessPage');
    };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        {/* Logo */}
        <Icon name="rocket" size={30} color="white" />
        
        {/* Search Bar */}
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>
      <View style={styles.titleBar}>
      <View style={styles.titleBarLine}></View>
        {/* Title Bar Content */}
        <Text style={styles.titleText}>Order Details</Text>
        <View style={styles.movingBarLine}></View>
      </View>
      <ScrollView>
      <View style={styles.rectangleArea}>
            <View style={styles.rectangleContent}>
              <Text style={styles.rectangleText}>Rice</Text>
              <Image source={require('E:/Projects/UEE/Project2/11.jpg')} style={styles.rectangleImagea} />
              <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.buttonin}
                onPress={() => {
                  // Handle the second button press
                }}
              >
                <Text style={styles.buttonText}>Remove</Text>
              </TouchableOpacity>
              </View>
              </View>
      </View>
      <View style={styles.rectangleArea}>
          <View style={styles.rectangleContent}>
            <Text style={styles.rectangleText}>Dhal</Text>
            <Image source={require('E:/Projects/UEE/Project2/16.jpg')} style={styles.rectangleImagef} />
            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.buttonin}
                onPress={() => {
                  // Handle the second button press
                }}
              >
                <Text style={styles.buttonText}>Remove</Text>
              </TouchableOpacity>
              </View>
            </View>
      </View>
      <View style={styles.rectangleArea}>
          <View style={styles.rectangleContent}>
            <Text style={styles.rectangleText}>Carrot</Text>
            <Image source={require('E:/Projects/UEE/Project2/17.jpg')} style={styles.rectangleImageg} />
            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.buttonin}
                onPress={() => {
                  // Handle the second button press
                }}
              >
                <Text style={styles.buttonText}>Remove</Text>
              </TouchableOpacity>
              </View>
            </View>
      </View>
      <View style={styles.rectangleArea}>
          <View style={styles.rectangleContent}>
            <Text style={styles.rectangleText}>Fish</Text>
            <Image source={require('E:/Projects/UEE/Project2/18.jpg')} style={styles.rectangleImageh} />
            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.buttonin}
                onPress={() => {
                  // Handle the second button press
                }}
              >
                <Text style={styles.buttonText}>Remove</Text>
              </TouchableOpacity>
              </View>
            </View>
      </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={handleNext} style={styles.button}>
          <Text style={styles.buttonItemText}>Place Order</Text>
        </TouchableOpacity>
        </View>

      <View style={styles.bottomNavigation}>
        <View style={styles.bottomNavItem}>
          <Icon name="bars" size={35} color="black" />
          <Text style={styles.bottomItemText}>Menu</Text>
        </View>
        <View style={styles.bottomNavItem}>
          <Icon name="shopping-cart" size={35} color="black" />
          <Text style={styles.bottomItemText}>Cart</Text>
        </View>
        <View style={styles.bottomNavItem}>
          <Icon name="bell" size={35} color="black" />
          <Text style={styles.bottomItemText}>Notification</Text>
        </View>
        <View style={styles.bottomNavItem}>
          <Icon name="star" size={35} color="black" />
          <Text style={styles.bottomItemText}>Review</Text>
        </View>
        <View style={styles.bottomNavItem}>
          <Icon name="user" size={35} color="black" />
          <Text style={styles.bottomItemText}>Account</Text>
        </View>
      </View>
    </View>

      
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
      },
      topBar: {
        backgroundColor: '#8b4513',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
      },
      searchBar: {
        flex: 1,
        height: 40,
        backgroundColor: 'white',
        marginLeft: 10,
        paddingLeft: 10,
      },
      titleBar: {
        backgroundColor: 'white', // Background color for the title bar
        padding: 10,
        alignItems: 'center',
      },
      titleText: {
        color: 'black', // Text color for the title
        fontSize: 20, // Adjust the font size as needed
      },
      titleBarLine: {
        height: 3,
        backgroundColor: 'black',
        width: '120%',
        position: 'absolute',
      },
      movingBarLine: {
        height: 3,
        backgroundColor: 'black',
        width: '120%',
        position: 'absolute',
        bottom: 0,
      },
      rectangleArea: {
        height: 80,
        top: 15,
        marginBottom: 20,
        backgroundColor: 'white',
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 5,
      },
      rectangleContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      rectangleText: {
        fontWeight: 'bold',
        fontSize: 24,
        paddingLeft: 15,
      },
      rectangleImagea: {
        width: 78,
        height: 78,
        marginLeft: 190,
      },
      rectangleImagef: {
        width: 78,
        height: 78,
        marginLeft: 188,
      },
      rectangleImageg: {
        width: 78,
        height: 78,
        marginLeft: 167,
      },
      rectangleImageh: {
        width: 78,
        height: 78,
        marginLeft: 192,
      },
      buttonContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
      button: {
        backgroundColor: '#8b4513',
        width: 300,
        height: 50,
        padding: 10,
        marginTop : 25,
        bottom:10,
        marginLeft: 40,
        borderRadius: 5,
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
      bottomNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: '#8b4513',
      },
      bottomNavItem: {
        alignItems: 'center',
      },
      bottomItemText: {
        color: 'black',
      },
      buttonItemText: {
        fontWeight: 'bold',
        fontSize: 24,
      },
});

export default CartPage;
