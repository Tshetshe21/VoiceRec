import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GetStarted from './components/GetStarted';
import SignUp from './components/SignUp';
import Login from './components/Login';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <View>
      <Login/>
    </View>
  );
}
export default App;