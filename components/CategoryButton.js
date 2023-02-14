import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';
import Colors from '../styles/Color';

export default function CategoryButton({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.name)}>
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.buttonText} </Text>
        <SimpleLineIcons
          name='arrow-right'
          size={16}
          color={Colors.DARK_BLUE}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    backgroundColor: Colors.LIGHT_TEAL,
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: '15%',
    marginVertical: 10,
    padding: 10,
    shadowColor: Colors.DARK_BLUE,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.3,
  },
  itemText: {
    fontSize: 25,
    fontFamily: 'McLaren',
    color: Colors.DARK_PURPLE,
  },
});
