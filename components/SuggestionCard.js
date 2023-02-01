import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function SuggestionCard({ suggestion }) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{suggestion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid',
    width: '100%',
    height: '100%',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.07,
    shadowRadius: 3.3,
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
});
