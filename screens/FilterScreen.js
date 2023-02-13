import React from 'react';
import { FlatList, SafeAreaView, Text } from 'react-native';
import { globalStyles } from '../styles/Global';
import CategoryButton from '../components/CategoryButton';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

// import Footer from '../components/Footer';

const auth = getAuth();
let uid = `default`;
let favsRef = null;
const currentDate = new Date().toDateString();

// let username = `default`;

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    uid = user.uid;
    // username = user.displayName;
    // console.log(`uid: ${uid}`, `username: `);
    favsRef = doc(db, 'users', uid, 'date', currentDate);

    // create a new db document db-users-uid-date-currentDate merge if it exists
    setDoc(
      favsRef,
      {
        favorites: [],
      },
      { merge: true }
    );
  } else {
    // User is signed out
    // ...
  }
});

export { uid, currentDate };

export default function FilterScreen({ navigation }) {
  const CATEGORIES = [
    { name: 'physical', key: 1, buttonText: 'tired' },
    { name: 'emotional', key: 2, buttonText: 'moody' },
    { name: 'mental', key: 3, buttonText: 'unmotivated' },
    { name: 'social', key: 4, buttonText: 'lonely' },
    { name: 'spiritual', key: 5, buttonText: 'lost' },
    { name: 'sensory', key: 6, buttonText: 'overstimulated' },
    { name: 'pleasure', key: 7, buttonText: 'burnt out' },
    { name: 'random', key: 8, buttonText: "I don't even know" },
  ];

  const pressHandler = (category) => {
    navigation.navigate('Suggestions', { chosenCategory: category });
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={globalStyles.titleText}>I want to feel less...</Text>
      <FlatList
        data={CATEGORIES}
        renderItem={({ item }) => (
          <CategoryButton item={item} pressHandler={pressHandler} />
        )}
      />
      {/* <Footer /> */}
    </SafeAreaView>
  );
}
