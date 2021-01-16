import React from 'react';
import Header from './Header';
import Overview from './Overview';
import Tickets from './Tickets';
import Images from './Images';

const Attraction = (props) => (
  <div className="attraction">
    <Header />
    <Overview />
    <Tickets />
    <Images />
  </div>
);

export default Attraction;
