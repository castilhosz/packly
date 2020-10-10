import React from 'react';
import { View } from 'react-native';

import { Feed } from './Feed';
import { Header } from './Header';

function Package() {
//PY149864129BR
  return(
    <View>
      <Header/>
      <Feed/>
    </View>
  )
}

export default Package;