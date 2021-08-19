import React, { useEffect, useState } from 'react';
import './App.css';
import FilterBar from './components/FilterBar';
import Table from './components/Table';
import AppContext from './context/AppContext';
import usePlanetsFilter from './hooks/usePlanetsFilter';

function App() {
  const [planets, setPlanets] = useState([]);
  const [tableColumns, setTableColumns] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
      try {
        const { results } = await fetch(END_POINT).then((data) => data.json());
        results.forEach((planet) => delete planet.residents);
        setPlanets(results);
        setTableColumns(Object.keys(results[0]));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const [planetsFiltered,
    filters,
    setFilters] = usePlanetsFilter(planets);

  const contextValue = {
    planets,
    planetsFiltered,
    filters,
    setFilters,
    tableColumns,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      <FilterBar />
      <Table />
    </AppContext.Provider>
  );
}

export default App;
