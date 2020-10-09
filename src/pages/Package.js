import React from 'react';
import { View, Text } from 'react-native';
import { BaseButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function Package() {
  const { navigate } = useNavigation();

  function handleNavigateToHomePage() {
    navigate('Home');
  };

  return(
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text>Package Screen</Text>

      <BaseButton
      onPress={handleNavigateToHomePage}
      >
        <Text>
          back to home 
        </Text>
      </BaseButton>

    </View>
  )
}

export default Package;