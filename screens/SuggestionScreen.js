import { Pressable, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/Global';
import suggestionsData from '../assets/data/idea-data.json';
import CardsSwipe from 'react-native-cards-swipe';
import Colors from '../styles/Color';

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

  const pressHandlerBackButton = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <CardsSwipe
        cards={categorySuggestions}
        cardContainerStyle={styles.cardContainer}
        renderCard={(card) => <Text style={styles.suggestionText}>{card}</Text>}
        loop={false}
        renderNoMoreCard={() => (
          <Pressable onPress={pressHandlerBackButton}>
            <View style={styles.backButton}>
              <Text style={styles.suggestionText}>Start Over</Text>
            </View>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backButton: {
    alignItems: 'center',
    backgroundColor: Colors.LIGHT_CYAN,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: '15%',
    marginVertical: 10,
    padding: 2,
    shadowColor: Colors.DARK_BLUE,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.3,
  },
  cardContainer: {
    backgroundColor: Colors.LIGHT_TEAL,
    borderRadius: 50,
    height: '45%',
    width: '80%',
    shadowColor: Colors.DARK_BLUE,
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.3,
  },
  suggestionText: {
    fontSize: 45,
    textAlign: 'center',
    padding: 13,
    color: Colors.DARK_BLUE,
    fontFamily: 'Amatic_Reg',
  },
});
