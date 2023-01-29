import { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

import ButtonCustom from './components/Button';
import ImageViewer from './components/ImageViewer';
import ButtonCategory from './components/ButtonCategory';
import { StatusBar } from 'expo-status-bar';

// images
const FineImage = require('./assets/images/fine.png');

export default function App() {
  // states
  const [category, setCategory] = useState('Choose a category');
  const [fineState, setFineState] = useState(true);

  // eventHandlers
  const chooseCatHandler = () => {
    setCategory('Physical');
  };
  const chooseCatHandler1 = () => {
    console.log('inside cathandler1');
    // setCategory({ props.category });
  };

  const toggleFineState = () => {
    const newState = !fineState;
    setFineState(newState);
  };

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.boldText}> Welcome to Lisa's App </Text>
        </View>
        <View style={styles.imageContainer}>
          <ImageViewer placeholderImageSource={FineImage} />
        </View>

        <View style={styles.choicesContainer}>
          <Button title='Physical' onPress={chooseCatHandler} />
          <ButtonCustom label='Click me' />
          <ButtonCategory category='Emotional' onPress={chooseCatHandler1} />
        </View>
        <Text>
          {`\n`}This is the current chosen category: {category}
          {'\n \n'}
        </Text>

        <View style={styles.choicesContainer}>
          <Button title='Is it fine?' onPress={toggleFineState} />
        </View>
        <Text>
          {fineState ? `\n Yes, it is fine.` : `\n No, it is not fine.`}
        </Text>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lavender',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Cochin',
  },
  header: {
    backgroundColor: 'teal',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  choicesContainer: {
    // flex: 1 / 3,
    alignItems: 'center',
  },
});
