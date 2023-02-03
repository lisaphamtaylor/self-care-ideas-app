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
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: '15%',
    marginVertical: 10,
    padding: 10,
  },
  itemText: {
    fontSize: 30,
    fontFamily: 'Loved_Reg',
    color: Colors.DARK_PURPLE,
  },
});
