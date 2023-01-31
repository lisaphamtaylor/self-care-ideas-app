import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function CategoryButton({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.name)}>
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.name} </Text>
        <SimpleLineIcons name='arrow-right' size={16} color='black' />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    backgroundColor: '#bbb',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: '15%',
    marginTop: 16,
    padding: 16,
  },
  itemText: {
    fontSize: 20,
  },
});
