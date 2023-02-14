import React, { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { globalStyles } from '../styles/Global';

import { db } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';

import Footer from '../components/Footer';
import { currentDate, uid } from './FilterScreen';
import Colors from '../styles/Color';

export default function MoodScreen({ navigation }) {
  const [journalText, setJournalText] = useState('');
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

  const updateJournal = (text) => {
    updateDoc(journalRef, { journalEntry: text });
  };

  return (
    <SafeAreaView
      style={[globalStyles.container, { justifyContent: 'flex-start' }]}
    >
      <Text style={[globalStyles.titleText, { fontSize: 31, marginTop: 50 }]}>
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
      <View style={styles.footer}>
        <Footer navigation={navigation} />
      </View>

      <View style={styles.textbox}>
        <TextInput
          placeholderTextColor='grey'
          placeholder='Write a journal entry here...'
          autoCapitalize='sentences'
          editable
          multiline
          numberOfLines={5}
          maxLength={1000}
          value={journalText}
          onChangeText={(text) => setJournalText(text)}
          style={styles.text}
        />
      </View>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={updateJournal(journalText)}
      >
        <Text style={{ fontSize: 20 }}>Submit Entry</Text>
      </TouchableOpacity>
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
  footer: {
    alignSelf: 'center',
    position: 'absolute',
    width: '100%',
    bottom: '5%',
    zindex: 999,
  },
  textbox: {
    backgroundColor: Colors.LIGHT_CYAN,
    borderRadius: 20,
    marginTop: 40,
    marginHorizontal: 25,
    minHeight: 100,
    shadowColor: Colors.DARK_BLUE,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.3,
  },
  text: {
    fontSize: 18,
    padding: 15,
    marginTop: 15,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#8EE3F6',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 40,
    alignSelf: 'center',
    width: '60%',
    marginTop: 15,
  },
});
