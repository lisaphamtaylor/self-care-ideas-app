import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import FilterScreen from './FilterScreen';
import SuggestionScreen from './SuggestionScreen';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const SignedInStack = () => {
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
      <Stack.Screen name='Home' component={FilterScreen} />
      <Stack.Screen name='Suggestions' component={SuggestionScreen} />
    </Stack.Navigator>
  </NavigationContainer>;
};

export default SignedInStack;
