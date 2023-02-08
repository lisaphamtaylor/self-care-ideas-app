import { SafeAreaView, Text, StyleSheet } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/Global';
import Colors from '../styles/Color';
import SignupForm from '../components/forms/SignupForm';

const SignupScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={globalStyles.registrationContainer}>
      <Text style={[globalStyles.titleText, globalStyles.registrationTitle]}>
        Sign Up
      </Text>
      <SignupForm navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
