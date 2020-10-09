import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import { BaseButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function Home() {
  const [code, setCode] = useState('');
  const { navigate } = useNavigation();

  function handleNavigateToPackagePage() {
    navigate('Package')
  }

  return(
    <View>
      <View style={styles.containerTitle}>
        <Text style={styles.titleText}>Welcome to</Text>
        <Image style={styles.titleImage} source={require('../assets/logotext.png')}/>
      </View>
      <View>
        <Text>Track your package</Text>
        <TextInput 
        placeholder="Correios's code"
        value={code}
        onChangeText={setCode}/>
        <BaseButton
        onPress={handleNavigateToPackagePage}
        >
          <Text>Let's track!</Text>
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
  }
})

export default Home;