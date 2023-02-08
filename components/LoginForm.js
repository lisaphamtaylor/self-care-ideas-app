import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../styles/Color';

export default function LoginForm() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.inputField}>
        <TextInput
          placeholderTextColor='grey'
          placeholder='Phone number, username, or email'
          autoCapitalize='none'
          keyboardType='email-address'
          textContentType='emailAddress'
          autoFocus={true}
        />
      </View>

      <View style={styles.inputField}>
        <TextInput
          placeholderTextColor='grey'
          placeholder='Password'
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={true}
          textContentType='password'
        />
      </View>
      <View style={styles.forgotButton}>
        <Text style={styles.forgotText}>Forgot password?</Text>
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>

      <View style={styles.signupContainer}>
        <Text style={{ fontSize: 15 }}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.forgotText}> Sign Up </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginTop: 200, marginHorizontal: 15 },
  inputField: {
    borderRadius: 40,
    padding: 12,
    backgroundColor: 'white',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'grey',
  },
  forgotButton: {
    alignItems: 'flex-end',
    marginBottom: 30,
  },
  forgotText: { color: '#6BB0F5', fontSize: 15 },
  button: {
    backgroundColor: '#0096F6',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 40,
    alignSelf: 'center',
    width: '40%',
  },
  buttonText: {
    color: Colors.LIGHT_CYAN,
    fontSize: 20,
  },
  signupContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 50,
  },
});
