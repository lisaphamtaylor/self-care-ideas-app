import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/global';
import suggestionsData from '../assets/data/idea-data.json';
import SuggestionCard from '../components/SuggestionCard';

export default function SuggestionScreen({ route, navigation }) {
  // getting the params
  const { chosenCategory } = route.params;

  let categorySuggestions = [];

  const DATA = [
    {
      suggestion: 'take a walk around the block',
      category: ['physical', 'sensory', 'pleasure'],
      key: 1,
    },
    {
      suggestion: 'find a quiet spot and meditate',
      category: ['spiritual', 'sensory', 'emotional'],
      key: 2,
    },
  ];

  console.log(chosenCategory);
  suggestionsData.forEach((item) => {
    const catArray = item.category;
    if (catArray.includes(chosenCategory)) {
      console.log(item.suggestion);
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
