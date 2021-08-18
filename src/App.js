import React from 'react';
import './App.css';
import SearchScreen from './components/DisplayScreen/SearchScreen';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <SearchScreen />
    </Provider>
  );
}

export default App;
