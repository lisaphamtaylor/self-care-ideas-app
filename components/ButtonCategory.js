import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function ButtonCategory(props) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>{props.category}</Text>
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
    width: '30%',
    height: '30%',
  },
  button: {},
  buttonText: {
    color: 'white',
  },
});
