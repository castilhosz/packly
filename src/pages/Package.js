import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { BaseButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';

function Package() {
  const { navigate } = useNavigation();
  const route = useRoute();

  const { code, page } = route.params;

  function handleNavigateToHomePage() {
    navigate(page);
  };

  return(
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.headerContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <BaseButton onPress={handleNavigateToHomePage}>
            <Image source={require('../assets/arrow.png')}/>
          </BaseButton>
            <Text style={styles.headerTitle}>Package not saved</Text>
          <BaseButton>
            <Image source={require('../assets/save.png')}/>
          </BaseButton>
        </View>
        <View>
          <View style={{ flexDirection: 'row', paddingTop: 25, }}>
            <Image source={require('../assets/shipping.png')}/>
            <Text style={styles.headerText}>Status: In transit: 2 days</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image style={{width: 24, height: 24}}source={require('../assets/code.png')}/>
            <Text style={styles.headerText}>Track code: {code} </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    width: 400,
    height: 130,
    backgroundColor: '#A500FF',
    paddingHorizontal: 10,
    paddingRight: 20,
    paddingTop: 10,
  },
  headerTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#fff',
  },
  headerText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#fff',
    left: 5,
  },
})

export default Package;