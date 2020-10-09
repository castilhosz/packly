import React from 'react';
import Routes from './routes';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { AppLoading } from 'expo';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return(
      <NavigationContainer>
        <StatusBar barStyle='light-content' backgroundColor='#AD15FF'/>
        <Routes />
      </NavigationContainer>
  )};
};