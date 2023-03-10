import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { globalStyles } from '../../styles/Global';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { Formik } from 'formik';
import * as Yup from 'yup';
import Validator from 'email-validator';

const LoginForm = ({ navigation }) => {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required('an email is required'),
    password: Yup.string()
      .required()
      .min(8, 'password must be at least 8 characters'),
  });

  const onLogin = async (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigation.navigate('Home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(
          'Invalid Login',
          'The password is invalid or the user does not have a password',
          [
            {
              text: 'OK',
              style: 'cancel',
            },
            { text: 'Sign Up', onPress: () => navigation.navigate('Signup') },
          ]
        );
      });
  };

  return (
    <View style={globalStyles.formikWrapper}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => onLogin(values.email, values.password)}
        validationSchema={LoginFormSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          isValid,
          errors,
          touched,
        }) => (
          <View>
            <View
              style={[
                globalStyles.inputField,
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
                placeholder='Email'
                autoCapitalize='none'
                keyboardType='email-address'
                textContentType='emailAddress'
                autoFocus={true}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={globalStyles.input}
              />
            </View>
            {errors.email && touched.email ? (
              <Text style={globalStyles.errorText}>{errors.email}</Text>
            ) : null}

            <View
              style={[
                globalStyles.inputField,
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
                style={globalStyles.input}
              />
            </View>
            {errors.password && touched.password ? (
              <Text style={globalStyles.errorText}>{errors.password}</Text>
            ) : null}
            <TouchableOpacity style={styles.forgotButton}>
              <Text style={globalStyles.forgotText}>Forgot password?</Text>
            </TouchableOpacity>

            <Pressable
              style={globalStyles.registrationButton(isValid)}
              onPress={handleSubmit}
              disabled={!isValid}
            >
              <Text style={globalStyles.registrationButtonText}>Log In</Text>
            </Pressable>

            <View style={globalStyles.signupContainer}>
              <Text style={{ fontSize: 15 }}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={globalStyles.forgotText}> Sign Up </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  forgotButton: {
    alignItems: 'flex-end',
    marginBottom: 30,
  },
});

export default LoginForm;
