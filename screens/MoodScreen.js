import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { globalStyles } from '../styles/Global';

import { db } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';

import Footer from '../components/Footer';
import { currentDate, uid } from './FilterScreen';

export default function MoodScreen({ navigation }) {
  const journalRef = doc(db, 'users', uid, 'date', currentDate);

  const updateMood = (number) => {
    updateDoc(journalRef, { mood: number });
    // console.log('mood updated to ' + number);
  };

  const press1 = () => updateMood(1);
  const press2 = () => updateMood(2);
  const press3 = () => updateMood(3);
  const press4 = () => updateMood(4);
  const press5 = () => updateMood(5);

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={[globalStyles.titleText, { fontSize: 31 }]}>
        How are you feeling today?
      </Text>

      <View style={styles.container}>
        {/* crying emoji */}
        <TouchableOpacity onPress={press1}>
          <Text style={styles.icon}>&#x1F62D;</Text>
        </TouchableOpacity>
        {/* sad emoji */}
        <TouchableOpacity onPress={press2}>
          <Text style={styles.icon}>&#x1F641;</Text>
        </TouchableOpacity>
        {/* neutral emoji */}
        <TouchableOpacity onPress={press3}>
          <Text style={styles.icon}>&#x1F610;</Text>
        </TouchableOpacity>
        {/* smile emoji */}
        <TouchableOpacity onPress={press4}>
          <Text style={styles.icon}>&#x1F642;</Text>
        </TouchableOpacity>
        {/* happy emoji */}
        <TouchableOpacity onPress={press5}>
          <Text style={styles.icon}>&#x1F604;</Text>
        </TouchableOpacity>
      </View>

      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
    marginHorizontal: 25,
  },
  icon: { fontSize: 40 },
});
