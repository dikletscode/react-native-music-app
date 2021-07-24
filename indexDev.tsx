import App from './src/App';
import React from 'react';
import {GlobalProvider} from './context/context';

const FullApp = () => {
  return (
    <GlobalProvider>
      <App />
    </GlobalProvider>
  );
};
export default FullApp;
