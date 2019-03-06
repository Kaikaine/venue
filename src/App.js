import React, { Component } from 'react';
import './resources/styles.css'

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueInfo from './components/venue_info';
import Highlights from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location/index';


class App extends Component {
  render() {
    return (
      <div className="App" style={{height: '1500px'}}>
        <Header />
        <Featured />
        <VenueInfo />
        <Highlights />
        <Pricing />
        <Location />
      </div>
    );
  }
}

export default App;
