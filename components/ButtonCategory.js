import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function ButtonCategory({ category, pressHandler }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={pressHandler}>
        <Text style={styles.buttonText}>{category}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'dodgerblue',
    padding: 3,
    borderColor: 'purple',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'row',
    // width: '30%',
    // height: '30%',
  },
  button: {},
  buttonText: {
    color: 'white',
  },
});
