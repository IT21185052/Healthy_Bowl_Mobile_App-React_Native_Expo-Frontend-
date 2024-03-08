import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal, FlatList, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const SelectionPage = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [barPosition, setBarPosition] = useState('type'); // Initially positioned at "Type"
  

  const handleNext = () => {
    // Add any logic you need before navigating to the selection page
    navigation.navigate('CartPage');
  };

  const handleBarPress = (position) => {
    setBarPosition(position);
  };

  const [addedItems, setAddedItems] = useState({
    rice: false,
    noodles: false,
    friedRice: false,
    pittu: false,
    macaroni: false,
    dhal: false,
    carrot: false,
    fish: false,
    beans: false,
    gotukola: false,
  });
  

  
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
        <TouchableWithoutFeedback onPress={() => handleBarPress('type')}>
          <Text
            style={[
              styles.titleText,
              barPosition === 'type' && styles.activeBar,
            ]}
          >
            Type
          </Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => handleBarPress('curries')}>
          <Text
            style={[
              styles.titleText,
              barPosition === 'curries' && styles.activeBar,
            ]}
          >
            Curries
          </Text>
        </TouchableWithoutFeedback>
        <View
          style={[
            styles.movingBar,
            { left: barPosition === 'type' ? 0 : '50%' },
          ]}
        />
        <View style={styles.movingBarLine}></View>
      </View>
      <ScrollView>
        {barPosition === 'type' && (
          <View style={styles.rectangleArea}>
            <View style={styles.rectangleContent}>
              <Text style={styles.rectangleText}>Rice</Text>
              <Image source={require('E:/Projects/UEE/Project2/11.jpg')} style={styles.rectangleImagea} />
              <View style={styles.buttonContainer}>
              <TouchableOpacity
  style={styles.button}
  onPress={() => {
    // Toggle the added state for "Rice"
    setAddedItems({ ...addedItems, rice: !addedItems.rice });
  }}
>
  <Text style={styles.buttonText}>
    {addedItems.rice ? "Added" : "Add"}
  </Text>
</TouchableOpacity>

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    // Handle the second button press
                  }}
                >
                  <Text style={styles.buttonText}>Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        {barPosition === 'type' && (
          <View style={styles.rectangleArea}>
            <View style={styles.rectangleContent}>
              <Text style={styles.rectangleText}>Noodles</Text>
              <Image source={require('E:/Projects/UEE/Project2/13.jpg')} style={styles.rectangleImageb} />
              <View style={styles.buttonContainer}>
              <TouchableOpacity
  style={styles.button}
  onPress={() => {
    // Toggle the added state for "Rice"
    setAddedItems({ ...addedItems, noodles: !addedItems.noodles });
  }}
>
  <Text style={styles.buttonText}>
    {addedItems.noodles ? "Added" : "Add"}
  </Text>
</TouchableOpacity>

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    // Handle the second button press
                  }}
                >
                  <Text style={styles.buttonText}>Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        {barPosition === 'type' && (
          <View style={styles.rectangleArea}>
            <View style={styles.rectangleContent}>
              <Text style={styles.rectangleText}>Fried Rice</Text>
              <Image source={require('E:/Projects/UEE/Project2/12.jpg')} style={styles.rectangleImagec} />
              <View style={styles.buttonContainer}>
              <TouchableOpacity
  style={styles.button}
  onPress={() => {
    // Toggle the added state for "Rice"
    setAddedItems({ ...addedItems, friedRice: !addedItems.friedRice });
  }}
>
  <Text style={styles.buttonText}>
    {addedItems.friedRice ? "Added" : "Add"}
  </Text>
</TouchableOpacity>

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    // Handle the second button press
                  }}
                >
                  <Text style={styles.buttonText}>Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        {barPosition === 'type' && (
          <View style={styles.rectangleArea}>
            <View style={styles.rectangleContent}>
              <Text style={styles.rectangleText}>Pittu</Text>
              <Image source={require('E:/Projects/UEE/Project2/14.png')} style={styles.rectangleImaged} />
              <View style={styles.buttonContainer}>
              <TouchableOpacity
  style={styles.button}
  onPress={() => {
    // Toggle the added state for "Rice"
    setAddedItems({ ...addedItems, pittu: !addedItems.pittu });
  }}
>
  <Text style={styles.buttonText}>
    {addedItems.pittu ? "Added" : "Add"}
  </Text>
</TouchableOpacity>

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    // Handle the second button press
                  }}
                >
                  <Text style={styles.buttonText}>Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        {barPosition === 'type' && (
          <View style={styles.rectangleArea}>
            <View style={styles.rectangleContent}>
              <Text style={styles.rectangleText}>Macaroni</Text>
              <Image source={require('E:/Projects/UEE/Project2/15.jpg')} style={styles.rectangleImagee} />
              <View style={styles.buttonContainer}>
              <TouchableOpacity
  style={styles.button}
  onPress={() => {
    // Toggle the added state for "Rice"
    setAddedItems({ ...addedItems, macaroni: !addedItems.macaroni });
  }}
>
  <Text style={styles.buttonText}>
    {addedItems.macaroni ? "Added" : "Add"}
  </Text>
</TouchableOpacity>

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    // Handle the second button press
                  }}
                >
                  <Text style={styles.buttonText}>Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        {barPosition === 'curries' && (
          <View style={styles.rectangleArea}>
          <View style={styles.rectangleContent}>
            <Text style={styles.rectangleText}>Dhal</Text>
            <Image source={require('E:/Projects/UEE/Project2/16.jpg')} style={styles.rectangleImagef} />
            <View style={styles.buttonContainer}>
            <TouchableOpacity
  style={styles.button}
  onPress={() => {
    // Toggle the added state for "Rice"
    setAddedItems({ ...addedItems, dhal: !addedItems.dhal });
  }}
>
  <Text style={styles.buttonText}>
    {addedItems.dhal ? "Added" : "Add"}
  </Text>
</TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  // Handle the second button press
                }}
              >
                <Text style={styles.buttonText}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      {barPosition === 'curries' && (
        <View style={styles.rectangleArea}>
          <View style={styles.rectangleContent}>
            <Text style={styles.rectangleText}>Carrot</Text>
            <Image source={require('E:/Projects/UEE/Project2/17.jpg')} style={styles.rectangleImageg} />
            <View style={styles.buttonContainer}>
            <TouchableOpacity
  style={styles.button}
  onPress={() => {
    // Toggle the added state for "Rice"
    setAddedItems({ ...addedItems, carrot: !addedItems.carrot });
  }}
>
  <Text style={styles.buttonText}>
    {addedItems.carrot ? "Added" : "Add"}
  </Text>
</TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  // Handle the second button press
                }}
              >
                <Text style={styles.buttonText}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      {barPosition === 'curries' && (
        <View style={styles.rectangleArea}>
          <View style={styles.rectangleContent}>
            <Text style={styles.rectangleText}>Fish</Text>
            <Image source={require('E:/Projects/UEE/Project2/18.jpg')} style={styles.rectangleImageh} />
            <View style={styles.buttonContainer}>
            <TouchableOpacity
  style={styles.button}
  onPress={() => {
    // Toggle the added state for "Rice"
    setAddedItems({ ...addedItems, fish: !addedItems.fish });
  }}
>
  <Text style={styles.buttonText}>
    {addedItems.fish ? "Added" : "Add"}
  </Text>
</TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  // Handle the second button press
                }}
              >
                <Text style={styles.buttonText}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      {barPosition === 'curries' && (
        <View style={styles.rectangleArea}>
          <View style={styles.rectangleContent}>
            <Text style={styles.rectangleText}>Beans</Text>
            <Image source={require('E:/Projects/UEE/Project2/19.jpg')} style={styles.rectangleImagei} />
            <View style={styles.buttonContainer}>
            <TouchableOpacity
  style={styles.button}
  onPress={() => {
    // Toggle the added state for "Rice"
    setAddedItems({ ...addedItems, beans: !addedItems.beans });
  }}
>
  <Text style={styles.buttonText}>
    {addedItems.beans? "Added" : "Add"}
  </Text>
</TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  // Handle the second button press
                }}
              >
                <Text style={styles.buttonText}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      {barPosition === 'curries' && (
        <View style={styles.rectangleArea}>
          <View style={styles.rectangleContent}>
            <Text style={styles.rectangleText}>Gotukola</Text>
            <Image source={require('E:/Projects/UEE/Project2/20.jpg')} style={styles.rectangleImagej} />
            <View style={styles.buttonContainer}>
            <TouchableOpacity
  style={styles.button}
  onPress={() => {
    // Toggle the added state for "Rice"
    setAddedItems({ ...addedItems, gotukola: !addedItems.gotukola });
  }}
>
  <Text style={styles.buttonText}>
    {addedItems.gotukola ? "Added" : "Add"}
  </Text>
</TouchableOpacity>


              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  // Handle the second button press
                }}
              >
                <Text style={styles.buttonText}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        )}
      </ScrollView>
      
      {barPosition === 'curries' && (
        <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
          <Text style={styles.buttonItemText}>Next</Text>
        </TouchableOpacity>
      )}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
  },
  titleText: {
    color: 'black',
    fontSize: 20,
    padding: 10,
  },
  activeBar: {
    fontWeight: 'bold',
  },
  movingBar: {
    height: 7,
    width: '60%',
    backgroundColor: '#8b4513',
    position: 'absolute',
    bottom: 0,
  },
  titleBarLine: {
    height: 3,
    backgroundColor: 'black',
    width: '120%',
    position: 'absolute',
  },
  movingBarLine: {
    height: 1,
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
  rectangleImageb: {
    width: 78,
    height: 78,
    marginLeft: 145,
  },
  rectangleImagec: {
    width: 78,
    height: 78,
    marginLeft: 127,
  },
  rectangleImaged: {
    width: 78,
    height: 78,
    marginLeft: 185,
  },
  rectangleImagee: {
    width: 78,
    height: 78,
    marginLeft: 135,
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
  rectangleImagei: {
    width: 78,
    height: 78,
    marginLeft: 169,
  },
  rectangleImagej: {
    width: 78,
    height: 78,
    marginLeft: 138,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  button: {
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
  buttonText: {
    fontWeight: 'bold',
    fontSize: 13,
    color: 'white',
    padding: 11,
    marginTop: -14,
  },
  curriesContent: {
    // Add styles for the content to display when "Curries" is selected
  },
  curriesText: {
    // Add styles for text in "Curries" content
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
  nextButton: {
    backgroundColor: '#8b4513',
    width: 300,
    height: 50,
    padding: 10,
    top: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 40,
    marginBottom: 40,
  },
  buttonItemText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});
export default SelectionPage;