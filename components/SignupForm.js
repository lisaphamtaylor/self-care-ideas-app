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

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: '', username: '', password: '' }}
        onSubmit={(values) => console.log(values)}
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
                placeholder='Email'
                autoCapitalize='none'
                keyboardType='email-address'
                textContentType='emailAddress'
                autoFocus={true}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>
            {/* {errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )} */}

            <View
              style={[
                styles.inputField,
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
            {/* {errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )} */}

            <Pressable
              style={styles.button(isValid)}
              onPress={handleSubmit}
              disabled={!isValid}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>

            <View style={styles.signupContainer}>
              <Text style={{ fontSize: 15 }}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.forgotText}> Log In </Text>
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
    borderRadius: 4,
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
    marginTop: 25,
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
  errorText: {
    color: 'red',
    // fontStyle: 'italic',
    alignSelf: 'center',
    marginBottom: 10,
  },
});

export default SignupForm;
