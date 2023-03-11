import React, { useState, useEffect } from 'react';
import { Carousel } from './Carousel';

import beach from '/beach.jpg';
import drinks from '/drinks.jpg';
import ocean from '/ocean.jpg';
import pool from '/pool.jpg';
import van from '/van.jpg';

const PATHS = [beach, drinks, ocean, pool, van];

const App = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const nextImg = () => setCurrentImg((current) => ++current % PATHS.length);

  useEffect(() => {
    const interval = setInterval(nextImg, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <Carousel src={PATHS[currentImg]} />;
};

export default App;
