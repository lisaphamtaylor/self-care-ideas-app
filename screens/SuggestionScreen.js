import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/global';
import suggestionsData from '../assets/data/idea-data.json';
import SuggestionCard from '../components/SuggestionCard';
import CardsSwipe from 'react-native-cards-swipe';

// Fisher-Yates shuffle method
function shuffleArray(array) {
  let currentId = array.length;
  // There remain elements to shuffle
  while (0 !== currentId) {
    // Pick a remaining element
    let randomId = Math.floor(Math.random() * currentId);
    currentId -= 1;
    // Swap it with the current element.
    let temp = array[currentId];
    array[currentId] = array[randomId];
    array[randomId] = temp;
  }
  return array;
}

export default function SuggestionScreen({ route, navigation }) {
  // getting the params
  const { chosenCategory } = route.params;

  // building chosenCategory suggestions array
  let categorySuggestions = [];

  suggestionsData.forEach((item) => {
    const catArray = item.category;
    if (chosenCategory === 'random' || catArray.includes(chosenCategory)) {
      categorySuggestions.push(item.suggestion);
    }
  });

  categorySuggestions = shuffleArray(categorySuggestions);

  return (
    <SafeAreaView style={globalStyles.container}>
      <CardsSwipe
        cards={categorySuggestions}
        cardContainerStyle={styles.cardContainer}
        renderCard={(card) => <Text style={styles.suggestionText}>{card}</Text>}
      />
      {/* <FlatList
        data={categorySuggestions}
        renderItem={({ item }) => <SuggestionCard suggestion={item} />}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#00B4D8',
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid',
    height: '50%',
    width: '80%',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.07,
    shadowRadius: 3.3,
  },
  suggestionText: {
    fontSize: 30,
    textAlign: 'center',
    padding: 13,
  },
});
