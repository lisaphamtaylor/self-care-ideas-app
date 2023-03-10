import { SafeAreaView, StyleSheet, Text } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/Global';
import LoginForm from '../components/forms/LoginForm';

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={globalStyles.registrationContainer}>
      <Text style={[globalStyles.titleText, globalStyles.registrationTitle]}>
        Log In
      </Text>
      <LoginForm navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
