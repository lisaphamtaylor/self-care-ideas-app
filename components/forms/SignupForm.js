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
import Colors from '../../styles/Color';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { globalStyles } from '../../styles/Global';

import { Formik } from 'formik';
import * as Yup from 'yup';
import Validator from 'email-validator';

const SignupForm = ({ navigation }) => {
  const SignupFormSchema = Yup.object().shape({
    email: Yup.string().email().required('an email is required'),
    username: Yup.string()
      .required()
      .min(2, 'username must be at least 2 characters'),
    password: Yup.string()
      .required()
      .min(8, 'password must be at least 8 characters'),
  });

  const onSignup = async (email, password, username) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        Alert.alert('Successful sign up!', [
          {
            text: 'Welcome',
            onPress: () => navigation.navigate('Home'),
          },
        ]);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(
          'Invalid Sign Up',
          'There already is an account with this email address.',
          [
            {
              text: 'OK',
              style: 'cancel',
            },
            { text: 'Log In', onPress: () => navigation.navigate('Login') },
          ]
        );
      });
  };

  return (
    <View style={globalStyles.formikWrapper}>
      <Formik
        initialValues={{ email: '', username: '', password: '' }}
        onSubmit={(values) => onSignup(values.email, values.password)}
        validationSchema={SignupFormSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          isValid,
          errors,
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
            {/* {errors.email && (
              <Text style={globalStyles.errorText}>{errors.email}</Text>
            )} */}

            <View
              style={[
                globalStyles.inputField,
                {
                  borderColor:
                    values.username.length < 1 || values.username.length >= 3
                      ? 'grey'
                      : 'red',
                },
              ]}
            >
              <TextInput
                placeholderTextColor='grey'
                placeholder='Username'
                autoCapitalize='none'
                textContentType='username'
                autoFocus={true}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                style={globalStyles.input}
              />
            </View>

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
            {/* {errors.password && (
              <Text style={globalStyles.errorText}>{errors.password}</Text>
            )} */}

            <Pressable
              style={globalStyles.registrationButton(isValid)}
              onPress={handleSubmit}
              disabled={!isValid}
            >
              <Text style={globalStyles.registrationButtonText}>Sign Up</Text>
            </Pressable>

            <View style={globalStyles.signupContainer}>
              <Text style={{ fontSize: 15 }}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={globalStyles.forgotText}> Log In </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignupForm;
