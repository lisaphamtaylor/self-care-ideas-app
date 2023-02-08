import { SafeAreaView, Text, StyleSheet } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/Global';
import Colors from '../styles/Color';
import SignupForm from '../components/SignupForm';

const SignupScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[globalStyles.titleText, { color: Colors.DARK_BLUE }]}>
        Sign Up
      </Text>
      <SignupForm navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LIGHT_CYAN,
  },
});

export default SignupScreen;
