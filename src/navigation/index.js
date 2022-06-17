import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from '../utilities/Constants';
import {screenOptions} from '../utilities/NavigationUtil';

//Screen Components Imports
import Screen1 from '../screenModules/Screen1';
import Screen2 from '../screenModules/Screen2';

// const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={screenNames.screen1} component={Screen1} />
      <Stack.Screen name={screenNames.screen2} component={Screen2} />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;
