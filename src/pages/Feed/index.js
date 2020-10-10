import { rastro } from 'rastrojs';
import React from 'react';
import { ScrollView } from 'react-native';

import { Box, BottomBox, City, Date, Description, Time, Title } from './styles';

export default function Feed() {

    const res = await rastro.track(code);
    const response = res[0];
    const data = await response.json();

  if (data.status == 'Objeto postado') {
  return (
      <ScrollView>
        <Box>
          <Title></Title>
          <BottomBox>
            <Image source={require('../../assets/posted.png')}/>
            <Description>
              <City></City>
              <Date></Date>
              <Time></Time>
            </Description>
          </BottomBox>
        </Box>
      </ScrollView>
  )} else if (data.status == 'Objeto entregue ao destinatário') {
    return (
      <ScrollView>
        <Box>
          <Title></Title>
          <BottomBox>
            <Image source={require('../../assets/check.png')}/>
            <Description>
              <City></City>
              <Date></Date>
              <Time></Time>
            </Description>
          </BottomBox>
        </Box>
      </ScrollView>
  )} else {
    return (
      <ScrollView>
        <Box>
          <Title></Title>
          <BottomBox>
            <Image source={require('../../assets/shippingpurple.png')}/>
            <Description>
              <City></City>
              <Date></Date>
              <Time></Time>
            </Description>
          </BottomBox>
        </Box>
      </ScrollView>
    )}
}
