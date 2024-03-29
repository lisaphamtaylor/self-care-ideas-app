import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

// importing screens for App
import FilterScreen from './screens/FilterScreen';
import SuggestionScreen from './screens/SuggestionScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import MoodScreen from './screens/MoodScreen';

// initializing Stack
const Stack = createNativeStackNavigator();

export default function App() {
  // downloading custom fonts
  let [fontsLoaded] = useFonts({
    Amatic_Bold: require('./assets/fonts/AmaticSC-Bold.ttf'),
    Amatic_Reg: require('./assets/fonts/AmaticSC-Regular.ttf'),
    Chewy: require('./assets/fonts/Chewy-Regular.ttf'),
    Kalam: require('./assets/fonts/Kalam-Light.ttf'),
    Loved_Reg: require('./assets/fonts/LovedbytheKing-Regular.ttf'),
    McLaren: require('./assets/fonts/McLaren-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Signup'
          component={SignupScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Home'
          component={FilterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Suggestions'
          component={SuggestionScreen}
          options={{ title: 'Self Care Suggestions' }}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Favorites'
          component={FavoritesScreen}
          options={{ title: 'User Log' }}
        />
        <Stack.Screen
          name='Mood'
          component={MoodScreen}
          options={{ title: 'Journal' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
