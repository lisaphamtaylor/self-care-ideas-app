import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function SuggestionCard({ suggestion }) {
  return (
    <View>
      <Text>{suggestion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
