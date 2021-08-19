import React, { useState, useEffect } from 'react';
import getPlanets from './services/planetsApi';
import AppContext from './context/AppContext';
import Table from './components/Table';
import FilterBar from './components/FilterBar';
import usePlanetsFilter from './hooks/usePlanetsFilter';
import ActiveFilters from './components/ActiveFilters';

function App() {
  const [planets, setPlanets] = useState([]);
  const [tableColumns, setTableColumns] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getPlanets();
        const { results } = await response.json();
        results.forEach((planet) => delete planet.residents);
        setPlanets(results);
        setTableColumns(Object.keys(results[0]));
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  const [planetsFiltered, filters, setFilters, removeFilter] = usePlanetsFilter(planets);

  const contextValue = {
    planetsFiltered,
    tableColumns,
    filters,
    setFilters,
    removeFilter,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      <FilterBar />
      <ActiveFilters />
      <Table />
    </AppContext.Provider>
  );
}

export default App;
