import {
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { globalStyles } from '../styles/Global';
import { collection, getDocs, query } from 'firebase/firestore';
import { uid } from './FilterScreen';
import { db } from '../firebase';
import Footer from '../components/Footer';
import Colors from '../styles/Color';

const FavoritesScreen = ({ navigation }) => {
  const [favorites, setFavorites] = useState([]);

  if (uid !== null) {
    const fetchFavorites = async () => {
      await getDocs(collection(db, 'users', uid, 'date')).then(
        (querySnapshot) => {
          const newData = querySnapshot.docs.map((doc) => ({
            data: doc.data().favorites,
            id: doc.id,
            mood: doc.data().mood,
          }));
          setFavorites(newData);
        }
      );
    };
    useEffect(() => {
      fetchFavorites();
    }, []);
  } else {
    console.log('No such document!');
  }

  function renderItem({ item, index, section }) {
    return (
      <View
        style={[
          styles.favItem,
          index === 0 && styles.itemFirst,
          index === section.data.length - 1 && styles.itemLast,
        ]}
      >
        <Text style={styles.itemText}>{item}</Text>
      </View>
    );
  }

  function renderSectionHeader({ section: { id, mood } }) {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.headerText}>{id}</Text>
        {mood ? <Text style={styles.moodText}>mood: {mood}</Text> : null}
      </View>
    );
  }

  // console.log(favorites);
  return (
    <SafeAreaView style={globalStyles.container}>
      <SectionList
        sections={favorites}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        stickySectionHeadersEnabled={false}
      />
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  favItem: {
    backgroundColor: Colors.LIGHT_TEAL,
    borderBottomColor: Colors.DARK_PURPLE,
    borderBottomWidth: 1,
    marginHorizontal: 20,
    padding: 8,
  },
  itemFirst: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  itemLast: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomWidth: 0,
  },
  itemText: {
    textAlign: 'left',
    fontSize: 20,
    fontFamily: 'McLaren',
    color: Colors.DARK_PURPLE,
  },
  headerText: {
    fontSize: 25,
    // fontFamily: 'Amatic_Bold',
    color: Colors.LIGHT_CYAN,
  },
  moodText: {
    fontSize: 23,
    fontStyle: 'italic',
    color: Colors.LIGHT_CYAN,
    marginLeft: 15,
  },
  sectionHeader: {
    marginHorizontal: 30,
    marginTop: 25,
  },
});
