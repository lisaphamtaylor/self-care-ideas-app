import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/global';

export default function SuggestionScreen({ route, navigation }) {
  // getting the params

  const { categoryKey } = route.params;

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text>{categoryKey}</Text>
      <Text>Suggestion #2</Text>
      <Text>Suggestion #3</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
