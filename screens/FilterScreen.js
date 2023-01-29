import React from 'react';
import { FlatList, Pressable, SafeAreaView, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function FilterScreen({ navigation }) {
  const CATEGORIES = [
    { name: 'physical', key: 1 },
    { name: 'emotional', key: 2 },
    { name: 'mentally-fit', key: 3 },
    { name: 'social', key: 4 },
    { name: 'spiritual', key: 5 },
    { name: 'sensory', key: 6 },
    { name: 'fun', key: 7 },
    { name: 'random', key: 8 },
  ];

  const pressHandler = (category) => {
    navigation.navigate('Suggestions', { categoryKey: category });
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={globalStyles.titleText}>TODAY I WANT TO FEEL MORE...</Text>
      <FlatList
        data={CATEGORIES}
        renderItem={({ item }) => (
          <View style={globalStyles.pressableButtonContainer}>
            <Pressable
              onPress={() => pressHandler(item.name)}
              style={globalStyles.pressableButton}
            >
              <Text style={globalStyles.titleText}>{item.name}</Text>
            </Pressable>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
