import {
  FlatList,
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { globalStyles } from '../styles/Global';
import { collection, getDocs, query } from 'firebase/firestore';
import { currentDate, uid } from './FilterScreen';
import { db } from '../firebase';

const FavoritesScreen = () => {
  // const [favorites, setFavorites] = useState([
  //   {
  //     id: 'Mon Feb 13 2023',
  //     favorites: [
  //       "list 5 things you're grateful for",
  //       'sit outside the feeling of the sun or wind',
  //       'find a quiet spot and meditate',
  //       'set an intention and write it down somewhere you can reference it throughout your day',
  //       'read an easy/fun book, then pass it on to a friend',
  //       'carry out one act of kindness for a stranger today',
  //       'write a postcard or letter to send to a loved one',
  //       'hug a loved one or cherished pet',
  //       'get a massage',
  //     ],
  //   },
  //   {
  //     id: 'Sun Feb 12 2023',
  //     favorites: [
  //       'get a massage',
  //       'write a postcard or letter to send to a loved one',
  //       'plan a night with loved ones',
  //       'look at old photographs from good memories',
  //       'sit in a coffee shop or on a park bench and people watch',
  //     ],
  //   },
  // ]);
  const [favorites, setFavorites] = useState([]);

  if (uid !== null) {
    // const q = query(
    //   collection(db, 'users', '4tTjdZZ5g8apfPDxZYf50oEHfFA3', 'date')
    // );

    // const querySnapshot = getDocs(
    //   collection(db, 'users', '4tTjdZZ5g8apfPDxZYf50oEHfFA3', 'date')
    // );
    // for (const doc of querySnapshot.docs) {
    //   console.log(doc.id, '=>', doc.data());
    // }

    const fetchFavorites = async () => {
      await getDocs(collection(db, 'users', uid, 'date')).then(
        (querySnapshot) => {
          const newData = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setFavorites(newData);
          // console.log(newData);
        }
      );
    };
    useEffect(() => {
      fetchFavorites();
    }, []);
  } else {
    console.log('No such document!');
  }

  console.log(`FAVORITES: `, favorites);
  return (
    <SafeAreaView style={globalStyles.container}>
      <FlatList
        data={favorites}
        renderItem={({ item }) =>
          item.favorites?.map((idea, i) => (
            <View style={styles.favItem}>
              <Text key={i} style={globalStyles.registrationButtonText}>
                {idea}
              </Text>
            </View>
          ))
        }
        style={globalStyles.titleText}
      />
      {/* <SectionList
        sections={favorites}
        // keyExtractor={(item) => item}
        renderItem={({ item }) =>
          item.favorites?.map((idea, i) => (
            <View style={styles.favItem}>
              <Text key={i}>{idea}</Text>
            </View>
          ))
        }
        renderSectionHeader={({ section: { id } }) => (
          <Text style={globalStyles.titleText}>{id}</Text>
        )}
      /> */}
    </SafeAreaView>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  favItem: { padding: 5 },
});
