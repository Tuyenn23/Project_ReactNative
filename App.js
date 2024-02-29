import * as React from 'react';
import 'react-native-gesture-handler';
import Page from './Page';
import TrangHome from './TrangHome';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName='TrangHome'>
      <Stack.Screen name="Page" component={Page} />
      <Stack.Screen name="TrangHome" component={TrangHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }