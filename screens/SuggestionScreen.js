import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/global';
import suggestionsData from '../assets/data/idea-data.json';
import SuggestionCard from '../components/SuggestionCard';

export default function SuggestionScreen({ route, navigation }) {
  // getting the params
  const { chosenCategory } = route.params;

  // building chosenCategory suggestions array
  let categorySuggestions = [];

  suggestionsData.forEach((item) => {
    const catArray = item.category;
    if (catArray.includes(chosenCategory)) {
      categorySuggestions.push(item.suggestion);
    }
  });

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text>{chosenCategory}</Text>
      <Text>Suggestion #3</Text>
      <FlatList
        data={categorySuggestions}
        renderItem={({ item }) => <SuggestionCard suggestion={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
