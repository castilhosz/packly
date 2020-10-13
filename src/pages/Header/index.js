import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { BaseButton } from 'react-native-gesture-handler';

import { code, page } from '../Home';
import { HContainer, HTitle, HText } from './styles';

const [data, setData] = useState(null);
useEffect(() => {
  fetch(
    'http://localhost:3001/api', {
      method: 'GET',
      body: code,
    }).then( res => res.json())
    .then( response => { setData(response)});
  });

var lastData = data(data.length - 1);

var lastStatus = lastData.map(item => item.status);

function handleNavigateToHomePage() {
  navigate(page);
};

function Header() {
  if (lastStatus=='objeto postado') {
    return(
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <HContainer>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <BaseButton onPress={handleNavigateToHomePage}>
              <Image alt='' source={require('../../assets/arrow.png')}/>
            </BaseButton>
              <HTitle>Package not saved</HTitle>
            <BaseButton>
              <Image source={require('../../assets/save.png')}/>
            </BaseButton>
          </View>
          <View>
            <View style={{ flexDirection: 'row', paddingTop: 25, }}>
              <Image alt='' source={require('../../assets/shipping.png')}/>
              <HText>Status: Posted</HText>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Image alt='' style={{width: 24, height: 24}}source={require('../../assets/code.png')}/>
              <HText>Track code: {code} </HText>
            </View>
          </View>
        </HContainer>
      </View>
  )} else if (lastStatus=='objeto entregue ao destinatário') {
    return(
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <HContainer>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <BaseButton onPress={handleNavigateToHomePage}>
              <Image alt=''source={require('../../assets/arrow.png')}/>
            </BaseButton>
              <HTitle>Package not saved</HTitle>
            <BaseButton>
              <Image alt='' source={require('../../assets/save.png')}/>
            </BaseButton>
          </View>
          <View>
            <View style={{ flexDirection: 'row', paddingTop: 25, }}>
              <Image alt='' source={require('../../assets/shipping.png')}/>
              <HText>Status: Delivered</HText>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Image alt='' style={{width: 24, height: 24}}source={require('../../assets/code.png')}/>
              <HText>Track code: {code} </HText>
            </View>
          </View>
        </HContainer>
      </View>
  )} else {
    return(
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <HContainer>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <BaseButton onPress={handleNavigateToHomePage}>
              <Image alt='' source={require('../../assets/arrow.png')}/>
            </BaseButton>
              <HTitle>Package not saved</HTitle>
            <BaseButton>
              <Image alt='' source={require('../../assets/save.png')}/>
            </BaseButton>
          </View>
          <View>
            <View style={{ flexDirection: 'row', paddingTop: 25, }}>
              <Image alt='' source={require('../../assets/shipping.png')}/>
              <HText>Status: In transit</HText>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Image alt='' style={{width: 24, height: 24}}source={require('../../assets/code.png')}/>
              <HText>Track code: {code} </HText>
            </View>
          </View>
        </HContainer>
      </View>
    )};
};

export default Header; 