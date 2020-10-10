import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, Alert } from 'react-native';
import { BaseButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function Home() {
  var [code, setCode] = useState('');
  const { navigate } = useNavigation();

  function handleNavigateToPackagePage() {
    if (code=='') {
      Alert.alert(
        'error 204:',
        "You didn't especified the Correios's code"
      )
    } else {
      navigate('Package')
    }
  }

  return(
    <View style={{ flex:1 }}>
      <View style={styles.containerTitle}>
        <Text style={styles.titleText}>Welcome to</Text>
        <Image style={styles.titleImage} source={require('../assets/logotext.png')}/>
      </View>
      <View style={styles.containerTrack}>
        <Text style={styles.trackText}>Track your package</Text>
        <TextInput 
        placeholder="Correios's code"
        value={code}
        onChangeText={setCode}
        style={styles.trackInput}/>
        <BaseButton
        onPress={handleNavigateToPackagePage}
        style={styles.trackButtonContainer}>
          <Text style={styles.trackButtonText}>Let's track it!</Text>
        </BaseButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerTitle: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 50,
  },
  titleText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 30,
    color: '#000',
  },
  titleImage: {
    position: 'relative',
    width: 400,
    height: 99,
    top: -25
  },
  containerTrack: {
    flex: 3,
    position: 'relative',
    paddingHorizontal: 16,
  },
  trackText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#000'
  },
  trackInput: {
    width: 343,
    height: 50,
    backgroundColor: '#E8E8E8',
    color: '#BDBDBD',
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    top: 10,
  },
  trackButtonContainer: {
    width: 343,
    height: 50,
    backgroundColor: '#A500FF',
    borderRadius: 100,
    top: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trackButtonText: {
    color: '#fff',
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
  },
})

export default Home;

export var code = code;
export const page = 'Home';