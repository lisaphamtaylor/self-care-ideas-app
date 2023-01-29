import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FilterScreen from './screens/FilterScreen';
import { NavigationContainer } from '@react-navigation/native';

import SuggestionScreen from './screens/SuggestionScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={FilterScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name='Suggestions'
          component={SuggestionScreen}
          options={{ title: 'Self Care Suggestions' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
