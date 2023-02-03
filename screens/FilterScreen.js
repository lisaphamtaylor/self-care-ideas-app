import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { globalStyles } from '../styles/Global';
import CategoryButton from '../components/CategoryButton';

export default function FilterScreen({ navigation }) {
  const CATEGORIES = [
    { name: 'physical', key: 1, buttonText: 'tired' },
    { name: 'emotional', key: 2, buttonText: 'moody' },
    { name: 'mental', key: 3, buttonText: 'unmotivated' },
    { name: 'social', key: 4, buttonText: 'lonely' },
    { name: 'spiritual', key: 5, buttonText: 'lost' },
    { name: 'sensory', key: 6, buttonText: 'overstimulated' },
    { name: 'pleasure', key: 7, buttonText: 'burned out' },
    { name: 'random', key: 8, buttonText: "I don't even know" },
  ];

  const pressHandler = (category) => {
    navigation.navigate('Suggestions', { chosenCategory: category });
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>I want to feel less...</Text>
      <FlatList
        data={CATEGORIES}
        renderItem={({ item }) => (
          <CategoryButton item={item} pressHandler={pressHandler} />
        )}
      />
    </View>
  );
}
