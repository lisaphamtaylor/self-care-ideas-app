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
import { Formik } from 'formik';
import * as Yup from 'yup';
import Validator from 'email-validator';

const LoginForm = () => {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required('An email is required'),
    password: Yup.string()
      .required()
      .min(8, 'Your password has to have at least 8 characters'),
  });

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={LoginFormSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? 'grey'
                      : 'red',
                },
              ]}
            >
              <TextInput
                placeholderTextColor='grey'
                placeholder='Phone number, username, or email'
                autoCapitalize='none'
                keyboardType='email-address'
                textContentType='emailAddress'
                autoFocus={true}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>

            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.password.length || values.password.length >= 8
                      ? 'grey'
                      : 'red',
                },
              ]}
            >
              <TextInput
                placeholderTextColor='grey'
                placeholder='Password'
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={true}
                textContentType='password'
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>
            <View style={styles.forgotButton}>
              <Text style={styles.forgotText}>Forgot password?</Text>
            </View>

            <Pressable
              style={styles.button(isValid)}
              onPress={handleSubmit}
              disabled={!isValid}
            >
              <Text style={styles.buttonText}>Log In</Text>
            </Pressable>

            <View style={styles.signupContainer}>
              <Text style={{ fontSize: 15 }}>Don't have an account?</Text>
              <TouchableOpacity>
                <Text style={styles.forgotText}> Sign Up </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

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
  button: (isValid) => ({
    backgroundColor: isValid ? '#0096F6' : '#6BB0F5',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 40,
    alignSelf: 'center',
    width: '40%',
  }),
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

export default LoginForm;
