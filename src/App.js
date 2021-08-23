import React, {useContext, useEffect} from 'react';
import Table from './Components/Table';
import FetchApi from './Service/FetchApi';
import './App.css';
import Filter from './Components/Filter';
import MyContext from './Context/MyContext';

function App() {
  
  const { planets, setPlanets } = useContext(MyContext);
  useEffect(() => {    
    FetchApi(setPlanets)
  }, [])
  

  console.log(planets)
  return (
    <div>
      <Filter />
      <Table />
    </div>
  );
}

export default App;
