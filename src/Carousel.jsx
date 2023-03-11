import React from 'react';
import sun from './assets/sun.svg';

export const Carousel = ({ src }) => (
  <div>
    <header>
      <h1>My Summer Vacation</h1>
      <img
        src={sun}
        className='sun'
        alt='icon of sun'
      />
    </header>
    <section className='vacationContainer'>
      <img
        src={src}
        className='vacationImg'
        alt='photos from my summer vacation'
      />
    </section>
  </div>
);
