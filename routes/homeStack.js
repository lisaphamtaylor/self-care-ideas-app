import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FilterScreen from '../screens/FilterScreen';
import SuggestionScreen from '../screens/SuggestionScreen';

const screens = {
  Home: {
    screen: FilterScreen,
    navigationOptions: {
      title: 'Home',
    },
  },
  Suggestions: {
    screen: SuggestionScreen,
    navigationOptions: {
      title: 'Suggestions',
    },
  },
};

const HomeStack = createNativeStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#dffdff', height: 150 },
  },
});
