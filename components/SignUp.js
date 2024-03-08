import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [organizationError, setOrganizationError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [reEnterPasswordError, setReEnterPasswordError] = useState('');

  const navigation = useNavigation();

  const validateField = (field, value, regex, errorMessage) => {
    if (!regex.test(value)) {
      switch (field) {
        case 'First Name':
          setFirstNameError(errorMessage);
          break;
        case 'Last Name':
          setLastNameError(errorMessage);
          break;
        case 'Organization':
          setOrganizationError(errorMessage);
          break;
        case 'Email':
          setEmailError(errorMessage);
          break;
        case 'Phone Number':
          setPhoneNumberError(errorMessage);
          break;
        case 'Password':
          setPasswordError(errorMessage);
          break;
        case 'Re Enter Password':
          setReEnterPasswordError(errorMessage);
          break;
        default:
          break;
      }
    } else {
      switch (field) {
        case 'First Name':
          setFirstNameError('');
          break;
        case 'Last Name':
          setLastNameError('');
          break;
        case 'Organization':
          setOrganizationError('');
          break;
        case 'Email':
          setEmailError('');
          break;
        case 'Phone Number':
          setPhoneNumberError('');
          break;
        case 'Password':
          setPasswordError('');
          break;
        case 'Re Enter Password':
          setReEnterPasswordError('');
          break;
        default:
          break;
      }
    }
  };

  const handleSignUp = () => {
    if (!firstName || !lastName || !organization || !email || !phoneNumber || !password || !reEnterPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
    } else if (firstNameError || lastNameError || organizationError || emailError || phoneNumberError || passwordError || reEnterPasswordError) {
      Alert.alert('Error', 'Please correct the errors in the form.');
    } else {
      // Navigate to the home page when all fields are filled correctly
      navigation.navigate('Login');
    

      // Clear the form fields
      setFirstName('');
      setLastName('');
      setOrganization('');
      setEmail('');
      setPhoneNumber('');
      setPassword('');
      setReEnterPassword('');

    }
  };
  

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.label}>First Name:</Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={(text) => {
          setFirstName(text);
          validateField('First Name', text, /^[A-Za-z\s]+$/, 'First Name should contain only letters and spaces.');
        }}
        placeholder="Enter First name"
      />
      {firstNameError ? <Text style={styles.error}>{firstNameError}</Text> : null}

      <Text style={styles.label}>Last Name:</Text>
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={(text) => {
          setLastName(text);
          validateField('Last Name', text, /^[A-Za-z\s]+$/, 'Last Name should contain only letters and spaces.');
        }}
        placeholder="Enter Last Name"
      />
      {lastNameError ? <Text style={styles.error}>{lastNameError}</Text> : null}

      <Text style={styles.label}>Organization:</Text>
      <TextInput
        style={styles.input}
        value={organization}
        onChangeText={(text) => {
          setOrganization(text);
          validateField('Organization', text, /^[A-Za-z\s]+$/, 'Organization should contain only letters and spaces.');
        }}
        placeholder="Enter Organization"
      />
      {organizationError ? <Text style={styles.error}>{organizationError}</Text> : null}

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          validateField('Email', text,  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Please enter a valid email address.');
        }}
        placeholder="Enter Email Address"
        keyboardType="email-address"
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

      <Text style={styles.label}>Phone Number:</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={(text) => {
          setPhoneNumber(text);
          validateField('Phone Number', text, /^[0-9]{10}$/, 'Phone Number should be a 10-digit number.');
        }}
        placeholder="Enter phone number"
      />
      {phoneNumberError ? <Text style={styles.error}>{phoneNumberError}</Text> : null}

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

      <Text style={styles.label}>Re Enter Password:</Text>
      <TextInput
        style={styles.input}
        value={reEnterPassword}
        onChangeText={(text) => {
          setReEnterPassword(text);
          validateField('Re Enter Password', text, /^[A-Za-z0-9]+$/, 'Password should contain only letters and numbers.');
        }}
        placeholder="Re Enter Password"
      />
      {reEnterPasswordError ? <Text style={styles.error}>{reEnterPasswordError}</Text> : null}

      <View style={styles.buttonContainer}>
        <Button
          title="SignUp"
          onPress={handleSignUp}
          color="white"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
  error: {
    color: 'red',
  },
  buttonContainer: {
    backgroundColor: '#8b4513',
    borderRadius: 10,
  },
});

export default SignUp;
