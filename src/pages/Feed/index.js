import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView } from 'react-native';

import { Box, BottomBox, City, Date, Description, Time, Title } from './styles';

export default function Feed() {
  const [feed, setFeed] = useState([]);

  const response = await fetch(
    
  );
};
