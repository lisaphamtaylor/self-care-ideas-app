import { SafeAreaView, Text, StyleSheet } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/Global';
import Colors from '../styles/Color';
import LoginForm from '../components/LoginForm';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LoginForm />
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
