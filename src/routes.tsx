import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Album from './pages/Album';
import Question from './pages/Question';


const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: "#FCE0DD"
          }
        }}
      >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Album" component={Album} />
        <AppStack.Screen name="Question" component={Question} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;