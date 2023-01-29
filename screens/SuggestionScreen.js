import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/global';
import suggestionsData from '../assets/data/idea-data.json';
import SuggestionCard from '../components/SuggestionCard';

export default function SuggestionScreen({ route, navigation }) {
  // getting the params
  const { categoryKey } = route.params;

  const getCategorySuggestions = (categoryKey) => {};

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text>{categoryKey}</Text>
      {/* <Text>{suggestionsData}</Text> */}
      <Text>Suggestion #3</Text>
      <SuggestionCard suggestion={'this is a test'} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
