import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/Global';
import { doc, getDoc } from 'firebase/firestore';
import { currentDate, uid } from './FilterScreen';
import { db } from '../firebase';

const FavoritesScreen = () => {
  if (uid !== null) {
    const docRef = doc(db, 'users', uid, 'date', currentDate);
    const docSnap = getDoc(docRef);

    if (docSnap) {
      console.log('Document data:', docSnap.data);
    }
  } else {
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <View>
        <Text>FavoritesScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({});
