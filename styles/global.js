import { StyleSheet } from 'react-native';
import Colors from './Color';

export const globalStyles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.LIGHT_CYAN,
  },

  titleText: {
    fontSize: 50,
    color: Colors.DARK_PURPLE,
    textAlign: 'center',
    marginHorizontal: 10,
    fontFamily: 'Loved_Reg',
  },
});
