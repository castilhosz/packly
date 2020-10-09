import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function Package({ navigation }) {

  return(
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text>Package Screen</Text>
      <TouchableOpacity onPress={navigation.navigate('Home')}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Package;