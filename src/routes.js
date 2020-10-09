import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import Package from './pages/Package';

const Stack = createStackNavigator();
export default function Routes() {
  return(
    <Stack.Navigator headerMode={'none'} initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Package' component={Package} />
    </Stack.Navigator>
  );
};