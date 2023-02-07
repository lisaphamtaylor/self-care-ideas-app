import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../styles/Color';

const iconSize = 25;

const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Ionicons name='home-sharp' size={iconSize} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name='heart' size={iconSize} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name='ios-calendar' size={iconSize} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name='person' size={iconSize} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 25,
  },
  icon: {
    color: Colors.LIGHT_CYAN,
  },
});
