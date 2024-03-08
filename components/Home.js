import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity,Modal,FlatList,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import SelectionPage from './SelectionPage';
import { createStackNavigator } from '@react-navigation/stack';
import { Picker } from '@react-native-picker/picker';

const image3 = { uri: "E:/Projects/UEE/Project2/8.jpg" };

const Home = () => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedPeriod, setSelectedPeriod] = useState('');
  const [quantity, setQuantity] = useState('');
  const [searchText, setSearchText] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showPeriodModal, setShowPeriodModal] = useState(false);
  const [quantityError, setQuantityError] = useState('');

  const handlePlaceOrder = () => {
    // Add any logic you need before navigating to the selection page
    navigation.navigate('SelectionPage');
  };

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = (event, date) => {
    setShowDatePicker(false);
    if (date) {
      setSelectedDate(date);
    }
  };

  const togglePeriodDropdown = () => {
    // Open the period dropdown
    setShowPeriodModal(true);
  };

  const periodData = [
    { key: 'breakfast', label: 'Breakfast' },
    { key: 'lunch', label: 'Lunch' },
    { key: 'dinner', label: 'Dinner' },
  ];

  const validateQuantity = (text) => {
    const regex = /^[0-9]*$/; // Allow only numbers
    if (!regex.test(text)) {
      setQuantityError('Please enter numbers only');
    } else {
      setQuantityError('');
      setQuantity(text);
    }
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
      <View style={styles.profileContainer}>
      <Image source={require('E:/Projects/UEE/Project2/8.jpg')} style={styles.profileLogo} />
      </View>
      <View style={styles.content}>
        {/* Date Picker */}
        <View style={styles.formField}>
          <TouchableOpacity onPress={ openDatePicker}style={styles.buttonField}>
          <TextInput
          placeholder="Select Date"
          value={selectedDate.toDateString()}
          ></TextInput>
              <Icon name="calendar" size={24} color="gray" />
          </TouchableOpacity>
          {showDatePicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="default"
            onChange={(event, date) => setSelectedDate(date)}
          />
          )}
        </View>
        {/* Add your period selection component here */}
        <View style={styles.formField}>
          {/* Custom dropdown style */}
          <TouchableOpacity onPress={togglePeriodDropdown} style={styles.buttonField}>
            <TextInput
              placeholder="Select Period"
              value={selectedPeriod}
            ></TextInput>
            <Icon name="caret-down" size={24} color="gray" />
          </TouchableOpacity>
          <Modal visible={showPeriodModal} transparent animationType="slide">
            <View style={styles.modalContainer}>
              <FlatList
                data={periodData}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedPeriod(item.label);
                      setShowPeriodModal(false);
                    }}
                    style={styles.modalItem}
                  >
                    <Text>{item.label}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.key}
              />
            </View>
          </Modal>
        </View>
        
        {/* Add your quantity input component here */}
        <View style={styles.formField}>
  <TextInput
    style={styles.inputField}
    placeholder="Enter quantity"
    value={quantity}
    onChangeText={(text) => validateQuantity(text)} // Allow only numbers
    keyboardType="numeric" // Show numeric keyboard
  />
{quantityError ? (
            <Text style={styles.errorText}>{quantityError}</Text>
          ) : null}
          <TouchableOpacity onPress={handlePlaceOrder} style={styles.placeOrderButton}>
        <Text style={styles.placeOrderbuttonText}>Select Meals</Text>
      </TouchableOpacity>
        </View>
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
  content: {
    flex: 1,
    padding: 10,
    
  },
  formField: {
    marginBottom: 30,
  },
  formLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonField: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 16,
    marginRight: 10,
  },
  inputField: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 13,
    borderRadius: 30,
    justifyContent: 'space-between',
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  placeOrderButton: {
    backgroundColor: '#8b4513',
    padding: 15,
    width: 300,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
    marginLeft: 25,
  },
  placeOrderbuttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center', // Center content horizontally
  },
  profileLogo: {
    width: 80, // Adjust the width and height as needed
    height: 80, // Adjust the width and height as needed
    borderRadius: 40,
    marginTop: 40,
     // For a circular profile image, set border radius to half of width/height
  },
});

export default Home;
