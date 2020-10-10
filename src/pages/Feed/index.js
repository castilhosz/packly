import { rastrearEncomendas } from 'correios-brasil';
import React, { useState, useEffect} from 'react';
import { FlatList } from 'react-native';

import { Box, BottomBox, City, Date, Description, Time, Title } from './styles';

export default function Feed() {
  let code = ['PY149864129BR'];
  const [feed, setFeed] = useState([]);

  async function rastrear() {
    const response = await fetch(
      ''
    );

    setFeed(data);
  };

  useEffect(() => {
    rastrear();
  }, []);

  return(
    <FlatList
    data={feed}
    renderItem={({ item }) => (
      <Box>
        <Title>{item.status}</Title>
        <BottomBox>
          <Image source={require('../../assets/shippingpurple.png')}/>
          <Description>
            <City>{item.origem} a {item.destino}</City>
            <Date>{item.data}</Date>
            <Time>{item.hora}</Time>
          </Description>
        </BottomBox>
      </Box>
    )}
    />
  )
}

{/*
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
*/}