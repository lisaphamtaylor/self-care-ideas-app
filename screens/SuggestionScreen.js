import { Pressable, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/Global';
import suggestionsData from '../assets/data/idea-data.json';
import CardsSwipe from 'react-native-cards-swipe';
import Colors from '../styles/Color';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { currentDate, uid } from './FilterScreen';
import { db } from '../firebase';
import { AntDesign } from '@expo/vector-icons';

import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import Footer from '../components/Footer';

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

let addFavCard = () => {};

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

  if (uid !== null) {
    const favsRef = doc(db, 'users', uid, 'date', currentDate);
    addFavCard = (card) => {
      const cardMessage = categorySuggestions[card];
      updateDoc(favsRef, {
        favorites: arrayUnion(cardMessage),
      });
    };
  } else {
  }
  return (
    <SafeAreaView style={globalStyles.container}>
      <GestureHandlerRootView style={styles.gestureView}>
        <CardsSwipe
          cards={categorySuggestions}
          cardContainerStyle={styles.cardContainer}
          renderCard={(card) => (
            <Text style={styles.suggestionText}>{card}</Text>
          )}
          loop={false}
          renderNoMoreCard={() => (
            <Pressable onPress={pressHandlerBackButton}>
              <View style={styles.backButton}>
                <Text style={styles.suggestionText}>Start Over</Text>
              </View>
            </Pressable>
          )}
          renderNope={() => (
            <AntDesign
              name='dislike1'
              size={50}
              style={[styles.renderIcon, { transform: [{ rotate: '15deg' }] }]}
            />
          )}
          renderYep={() => (
            <AntDesign
              name='like1'
              size={50}
              style={[styles.renderIcon, { transform: [{ rotate: '-15deg' }] }]}
            />
          )}
          onSwipedRight={(card) => {
            addFavCard(card);
          }}
        />
      </GestureHandlerRootView>
      <Footer navigation={navigation} />
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
    height: '50%',
    width: '80%',
    shadowColor: Colors.DARK_BLUE,
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.3,
  },
  gestureView: {
    flex: 1,
  },
  suggestionText: {
    fontSize: 45,
    textAlign: 'center',
    padding: 13,
    color: Colors.DARK_BLUE,
    fontFamily: 'Amatic_Reg',
  },

  renderIcon: {
    color: Colors.DARK_BLUE,
    padding: 20,
  },
});
