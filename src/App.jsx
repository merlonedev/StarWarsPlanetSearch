import React from 'react';
import Planets from './pages/Planets';
import Provider from './provider/Provider';

function App() {
  return (
    <Provider>
      <Planets />
    </Provider>
  );
}

export default App;
