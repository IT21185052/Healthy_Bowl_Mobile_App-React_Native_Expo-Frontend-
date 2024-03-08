import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigation = useNavigation(); // Get the navigation object

  const validateField = (field, value, regex, errorMessage) => {
    if (!regex.test(value)) {
      switch (field) {
        case 'Email':
          setEmailError(errorMessage);
          break;
        case 'Password':
          setPasswordError(errorMessage);
          break;
        default:
          break;
      }
    } else {
      switch (field) {
        case 'Email':
          setEmailError('');
          break;
        case 'Password':
          setPasswordError('');
          break;
        default:
          break;
      }
    }
  };

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
    } else if (emailError || passwordError) {
      // Show a generic error message if there are validation errors
      Alert.alert('Error', 'Please correct the errors in the form.');
    } else {
      // Navigate to the home page when all fields are filled correctly
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('E:/Projects/UEE/Project2/assets/5.png')} style={styles.logo} />
      <Text style={styles.highlightText}>Welcome To Healthy Bowl !</Text>
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          validateField('Email', text, /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Enter Valid Email Address');
        }}
        placeholder="Enter Email Address"
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          validateField('Password', text, /^[A-Za-z0-9]+$/, 'Password should contain only letters and numbers.');
        }}
        placeholder="Enter Password"
      />
      {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: -10,
  },
  highlightText: {
    fontSize: 30,
    marginBottom: 60,
    fontWeight: 'bold',
    color: '#8b4513',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    backgroundColor: '#8b4513',
    width: 300,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Login;
