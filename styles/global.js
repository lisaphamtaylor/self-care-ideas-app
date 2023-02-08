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

  // styles for login and signup screens
  formikWrapper: {
    marginTop: 150,
    marginHorizontal: 15,
  },

  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: 'white',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'grey',
  },

  registrationButton: (isValid) => ({
    backgroundColor: isValid ? '#0096F6' : '#6BB0F5',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 40,
    alignSelf: 'center',
    width: '70%',
    marginTop: 25,
  }),

  registrationButtonText: {
    color: Colors.LIGHT_CYAN,
    fontSize: 20,
  },

  registrationContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: Colors.LIGHT_CYAN,
  },

  registrationTitle: {
    color: Colors.DARK_BLUE,
    marginTop: 100,
    position: 'absolute',
  },

  signupContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 50,
  },

  errorText: {
    color: 'red',
    // fontStyle: 'italic',
    alignSelf: 'center',
    marginBottom: 10,
  },

  forgotText: {
    color: '#6BB0F5',
    fontSize: 15,
  },
});
