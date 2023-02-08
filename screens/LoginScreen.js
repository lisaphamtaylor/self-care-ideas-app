import { SafeAreaView, Text, StyleSheet } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/Global';
import Colors from '../styles/Color';
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LIGHT_CYAN,
  },
});

export default LoginScreen;
