import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// importing screens for App
import FilterScreen from './screens/FilterScreen';
import SuggestionScreen from './screens/SuggestionScreen';

// initializing Stack
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
