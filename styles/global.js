import { StyleSheet } from 'react-native';
import Colors from './Color';

export const globalStyles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.DARK_TEAL,
  },

  titleText: {
    fontSize: 45,
    color: Colors.LIGHT_CYAN,
    textAlign: 'center',
    marginHorizontal: 10,
    marginTop: 25,
    marginBottom: 15,
    fontFamily: 'Chewy',
  },
});
