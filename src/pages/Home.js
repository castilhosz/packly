import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

function Home({ navigation }) {
  const [code, setCode] = useState('');

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
        <TouchableOpacity onPress={navigation.navigate('Package')}>
          <Text>Rastrear</Text>
        </TouchableOpacity>
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