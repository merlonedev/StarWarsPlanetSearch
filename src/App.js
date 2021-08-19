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
  const [planetsInOrder, setPlanetsInOrder] = useState([]);

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

  useEffect(() => {
    planetsFiltered.sort((a, b) => {
      const { column, sort } = filters.order;

      const isHigher = 1;
      const isLower = -1;

      let aValue = a[column];
      let bValue = b[column];

      if (!Number.isNaN(Number(a[column]))) {
        aValue = Number(a[column]);
        bValue = Number(b[column]);
      }

      if (aValue > bValue) return (sort === 'DESC') ? isLower : isHigher;
      if (aValue < bValue) return (sort === 'DESC') ? isHigher : isLower;
      return 0;
    });

    setPlanetsInOrder(planetsFiltered);
  }, [planetsFiltered, filters]);

  const contextValue = {
    planetsFiltered,
    planetsInOrder,
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
