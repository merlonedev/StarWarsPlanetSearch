import React from 'react';
import AppContext from './AppContext.js';

function Provider({ children }) {
  return (
    <AppContext.Provider>
      {
        children
      }
    </AppContext.Provider>
  );
}

export default Provider; 