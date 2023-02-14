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

  return (
    <SafeAreaView style={globalStyles.container}>
      {/* <FlatList
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
      /> */}
      <SectionList
        sections={favorites}
        renderItem={({ item, index, section }) => (
          <View
            style={[
              styles.favItem,
              index === 0 && styles.itemFirst,
              index === section.data.length - 1 && styles.itemLast,
            ]}
          >
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { id } }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.headerText}>{id}</Text>
          </View>
        )}
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
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  itemLast: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
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
  sectionHeader: {
    marginHorizontal: 30,
    marginTop: 25,
  },
});
