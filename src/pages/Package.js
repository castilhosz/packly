import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { BaseButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function Package() {
  const { navigate } = useNavigation();

  function handleNavigateToHomePage() {
    navigate('Home');
  };

  return(
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.headerContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <BaseButton onPress={handleNavigateToHomePage}>
            <Image source={require('../assets/arrow.png')}/>
          </BaseButton>
          <Text style={styles.headerTitle}> Package not saved </Text>
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
            <Text style={styles.headerText}>Track code: PY5465482 </Text>
          </View>
        </View>
      </View>

      <ScrollView>
        <View style={styles.packageUpdateContainer}>
          <Text style={styles.packageUpdateTitle}>Objeto recebido pelo destinatario</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image source={require('../assets/check.png')}/>
            <View style={{justifyContent: 'space-between', right: 150, paddingVertical: 5}}>
              <Text style={styles.packageUpdateText1}> CURITIBA / PR </Text>
              <Text style={styles.packageUpdateText2}> 2/10/2020 16:25</Text>
              <Text style={styles.packageUpdateText2}> 2 dias</Text>
            </View>
          </View>
        </View>

        <View style={styles.packageUpdateContainer}>
          <Text style={styles.packageUpdateTitle}>Objeto ecaminhado de Agencia dos Correios em SANTOS / SP para Unidade de tratamento em CAJAMAR / SP</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image source={require('../assets/shippingpurple.png')}/>
            <View style={{justifyContent: 'space-between', right: 150, paddingVertical: 5}}>
              <Text style={styles.packageUpdateText1}> CAJAMAR / SP </Text>
              <Text style={styles.packageUpdateText2}> 23/09/2020 22:14</Text>
              <Text style={styles.packageUpdateText2}> 1 mes e 24 dias</Text>
            </View>
          </View>
        </View>

        <View style={styles.packageUpdateContainer}>
          <Text style={styles.packageUpdateTitle}>Objeto postado</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image source={require('../assets/posted.png')}/>
            <View style={{justifyContent: 'space-between', right: 150, paddingVertical: 5}}>
              <Text style={styles.packageUpdateText1}> CAJAMAR / SP </Text>
              <Text style={styles.packageUpdateText2}> 22/09/2020 17:21</Text>
              <Text style={styles.packageUpdateText2}> 1 mes e 25 dias</Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
  packageUpdateContainer: {
    marginHorizontal: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    borderColor: '#E8E8E8', 
    marginVertical: 15,
  },
  packageUpdateTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#000',
    alignSelf: 'center',
    paddingHorizontal: 20
  },
  packageUpdateText1: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#000',
  },
  packageUpdateText2: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    fontStyle: 'italic',
    color: '#9f9f9f',
  }
})

export default Package;