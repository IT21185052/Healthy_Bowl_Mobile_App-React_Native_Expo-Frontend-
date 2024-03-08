import React from 'react';
import { View, TouchableOpacity, ImageBackground, StyleSheet, Text } from 'react-native';

const image1 = { uri: "E:/Projects/UEE/Project2/7.jpg" };
const image2 = { uri: "E:/Projects/UEE/Project2/assets/5.png" };

const FirstPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperPart}>
        <ImageBackground
          source={require('E:/Projects/UEE/Project2/7.jpg')}
          style={styles.backgroundImage}
        >
          {/* Your upper part content here */}
        </ImageBackground>
      </View>
      <View style={styles.lowerPart}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.extraBackgroundImage}>
          <ImageBackground
            source={require('E:/Projects/UEE/Project2/assets/5.png')} // Replace with the path to your additional image
            style={{ flex: 1, width: '100%' }}
          >
            {/* Additional background image content here */}
          </ImageBackground>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  upperPart: {
    flex: 5, // Adjust the height as needed
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerPart: {
    flex: 3, // Adjust the height as needed
    backgroundColor: 'white', // Lower part background color
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10, // Move the lower part down a bit
    flexDirection: 'row', // Change the direction to horizontal
  },
  extraBackgroundImage: {
    flex: 1, // This will make it cover the whole lower part
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#8b4513',
    width: 150, // Adjust the button width
    height: 40, // Adjust the button height
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default FirstPage;
