import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstPage from './components/FirstPage';
import SelectionPage from './components/SelectionPage';
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/SignUp';
import CartPage from './components/CartPage';
import SuccessPage from './components/SuccessPage';
import DetailsPage from './components/DetailsPage';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="First">
        <Stack.Screen name="First" component={FirstPage} />
        <Stack.Screen name="Login" component={Login} /> 
        <Stack.Screen name="Home" component={Home} /> 
        <Stack.Screen name="SignUp" component={SignUp} /> 
        <Stack.Screen name="SelectionPage" component={SelectionPage} />
        <Stack.Screen name="CartPage" component={CartPage} /> 
        <Stack.Screen name="SuccessPage" component={SuccessPage} /> 
        <Stack.Screen name="DetailsPage" component={DetailsPage} /> 
      </Stack.Navigator>
    </NavigationContainer>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});