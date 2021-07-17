import * as React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import StartGameScreen from './src/screens/StartGameScreen';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ShowCharacters from './src/components/ShowCharacters';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={HomeScreen} />
    </MainStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode="none">
        <RootStack.Screen name="Main" component={MainStackScreen} />
        <RootStack.Screen name="StartGame" component={StartGameScreen} />
        <RootStack.Screen name="ShowCharacters" component={ShowCharacters} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;

