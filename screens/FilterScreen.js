import React from 'react';
import {
  Button,
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { globalStyles } from '../styles/global';
import CategoryButton from '../components/CategoryButton';

export default function FilterScreen({ navigation }) {
  const CATEGORIES = [
    { name: 'physical', key: 1 },
    { name: 'emotional', key: 2 },
    { name: 'mental', key: 3 },
    { name: 'social', key: 4 },
    { name: 'spiritual', key: 5 },
    { name: 'sensory', key: 6 },
    { name: 'pleasure', key: 7 },
    { name: 'random', key: 8 },
  ];

  const pressHandler = (category) => {
    navigation.navigate('Suggestions', { chosenCategory: category });
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={globalStyles.titleText}>TODAY I WANT TO FEEL MORE...</Text>
      <FlatList
        data={CATEGORIES}
        renderItem={({ item }) => (
          // <View style={globalStyles.pressableButtonContainer}>
          //   <Pressable
          //     onPress={() => pressHandler(item.name)}
          //     style={globalStyles.pressableButton}
          //   >
          //     <Text style={globalStyles.titleText}>{item.name}</Text>
          //   </Pressable>
          // </View>
          <CategoryButton item={item} pressHandler={pressHandler} />
        )}
      />
    </SafeAreaView>
  );
}
