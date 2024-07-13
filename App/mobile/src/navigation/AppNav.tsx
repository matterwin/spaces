import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dummy from '../screens/dummy/Dummy.tsx';

const Stack = createStackNavigator();

const AppNav = () => {
  return (
    <Stack.Navigator initialRouteName='Dummy'>
      <Stack.Screen name={"Dummy"} component={Dummy} options={{ headerShown: true }}/>
    </Stack.Navigator>
  );
};

export default AppNav;
