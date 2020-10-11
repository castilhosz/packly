import React from 'react';
import { Image, ScrollView } from 'react-native';
import { code } from '../Home';
import { Box, BottomBox, City, Date, Description, Title } from './styles';

var data = async function() {
  await fetch(
  'http://localhost:3001/api', {
    method: 'GET',
    body: code,
});
}

var date = data.map(item => item.trackedAt);
var day = date.slice(8, 10);
var month = date.slice(5,7);
var year = date.slice(0,4);

var observation = data.map(item => item.observation);
var locale = data.map(item => item.locale);
var status = data.map(item => item.status);

function Feed() {
  if (status=='objeto postado') {
    return(
      <ScrollView>
        <Box>
          <Title>{status}</Title>
          <BottomBox>
            <Image alt='' source={require('../../assets/posted.png')}/>
            <Description>
              <City>{locale}</City>
              <Date>{day}/{month}/{year}</Date>
            </Description>
          </BottomBox>
        </Box>
      </ScrollView>
    );
  } else if (status=='objeto entregue ao destinatário') {
    return(
      <ScrollView>
        <Box>
          <Title>{status}</Title>
          <BottomBox>
            <Image alt='' source={require('../../assets/check.png')}/>
            <Description>
              <City>{locale}</City>
              <Date>{day}/{month}/{year}</Date>
            </Description>
          </BottomBox>
        </Box>
      </ScrollView>
    );
  } else {
    return(
      <ScrollView>
        <Box>
          <Title>{status}</Title>
          <BottomBox>
            <Image alt='' source={require('../../assets/shippingpurple.png')}/>
            <Description>
              <City>{observation}</City>
              <Date>{day}/{month}/{year}</Date>
            </Description>
          </BottomBox>
        </Box>
      </ScrollView>
    );
  };
};

export default Feed;