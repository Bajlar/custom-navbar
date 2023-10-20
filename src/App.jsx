import React from 'react';
import Header from './components/Header/Header';
import Prices from './components/Prices/Prices';
import ShowChart from './components/ShowChart/ShowChart';

const App = () => {
  return (
    <div>
      <Header />
      <Prices />
      <ShowChart />
    </div>
  );
};

export default App;