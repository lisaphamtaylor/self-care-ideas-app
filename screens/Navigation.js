import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import FilterScreen from './FilterScreen';
import SuggestionScreen from './SuggestionScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Signup' component={SignupScreen} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Home' component={FilterScreen} />
      <Stack.Screen name='Suggestions' component={SuggestionScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default SignedInStack;
