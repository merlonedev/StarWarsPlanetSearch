import React from 'react';
import './App.css';
import MainPage from '../Pages/MainPage';
import { Provider } from '../Provider';

function App() {
  return (
    <Provider>
      <MainPage />
    </Provider>
  );
}

export default App;
