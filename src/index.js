import React from 'react';
import { StatusBar } from 'react-native';

console.disableYellowBox = true;

import './config/reactotronConfig';

import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" brackgroundColor="#7159c1" />
      <Routes />
    </>
  );
};

export default App;
