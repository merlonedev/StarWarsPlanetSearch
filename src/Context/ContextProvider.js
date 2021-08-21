import React from 'react';
import context from './Context';

function contextProvider({ children }) {
  return (
    <context.Provider>
      { children }
    </context.Provider>
  );
}

export default contextProvider;
