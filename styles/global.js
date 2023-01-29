import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
  pressableButtonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    borderColor: 'midnightblue',
    borderWidth: 1,
    borderRadius: 10,
  },
  pressableButtonText: {
    // borderRadius: 10,
    // width: '100%',
    // height: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'row',
  },
  titleText: {
    fontSize: 18,
    color: '#333',
  },
});
