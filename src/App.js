import React from 'react';
import AppProvider from './context/AppProvider';
import './App.css';
import MainPage from './pages/MainPage';

function App() {
  return (
    <AppProvider>
      <MainPage />
    </AppProvider>
  );
}

export default App;
