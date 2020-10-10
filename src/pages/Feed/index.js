import { rastro } from 'rastrojs';
import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView } from 'react-native';

import { Box, BottomBox, City, Date, Description, Time, Title } from './styles';

export default function Feed() {
  const [feed, setFeed] = useState([]);

  async function loadPage() {
    const track = await rastro.track(code)

    const data = await track.json();
  }
};
