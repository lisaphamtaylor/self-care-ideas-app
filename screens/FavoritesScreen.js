import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { globalStyles } from '../styles/Global';
import { collection, getDocs, query } from 'firebase/firestore';
import { currentDate, uid } from './FilterScreen';
import { db } from '../firebase';

const FavoritesScreen = () => {
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
      <View>
        <Text>{favorites.favorites}</Text>
      </View>
    </SafeAreaView>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({});
