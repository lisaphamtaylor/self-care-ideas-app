import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Colors from '../styles/Color';
import { Divider } from 'react-native-elements';
import { getAuth, signOut } from 'firebase/auth';

const iconSize = 25;

const Footer = ({ navigation }) => {
  // const [activeTab, setActiveTab] = useState('');

  const pressHome = () => {
    // setActiveTab('Home');
    navigation.navigate('Home');
  };

  const pressFavorites = () => {
    // setActiveTab('Favorites');
    navigation.navigate('Favorites');
  };

  const pressMood = () => {
    // setActiveTab('Favorites');
    navigation.navigate('Mood');
  };

  const pressProfile = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // setActiveTab('Login');
        navigation.navigate('Login');
      })
      .catch((error) => {
        Alert.alert('Could not log out', error.message, [
          {
            text: 'OK',
            style: 'cancel',
          },
        ]);
      });
  };

  return (
    <View>
      <Divider width={1} orientation='vertical' />
      <View style={styles.container}>
        <TouchableOpacity onPress={pressHome}>
          <Ionicons name='home-sharp' size={iconSize} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={pressMood}>
          <AntDesign
            name='smile-circle'
            size={iconSize - 3}
            style={[styles.icon, { marginTop: 2 }]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={pressFavorites}>
          <Ionicons name='ios-calendar' size={iconSize} style={styles.icon} />
          {/* <Ionicons name='heart' size={iconSize} style={styles.icon} /> */}
        </TouchableOpacity>

        <TouchableOpacity onPress={pressProfile}>
          <Ionicons name='person' size={iconSize} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
    marginHorizontal: 25,
  },
  icon: {
    color: Colors.LIGHT_CYAN,
  },
});
