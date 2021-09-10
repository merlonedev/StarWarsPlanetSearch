import React, { useEffect, useContext } from 'react';
import Table from './Table';
import MyContext from '../context/MyContext';
import ContainerForm from './ContainerForm';
import InputFilterPlanets from './InputFilterPlanets';
import planetsByFilters from '../utils/planetsByFilters';
import SortComponent from './SortComponent';
import sortByPlanet from '../utils/sortByPlanet';

function Home() {
  const { planets, filters, setFilteredPlanets } = useContext(MyContext);
  useEffect(() => {
    const filteredPlanets1 = planetsByFilters({ planets, filters });
    filteredPlanets1.sort((a, b) => sortByPlanet(
      { a, b, column: filters.order.column, order: filters.order.sort },
    ));

    setFilteredPlanets(filteredPlanets1);
  }, [filters, planets, setFilteredPlanets]);

  return (
    <>
      <InputFilterPlanets />
      <ContainerForm />
      <SortComponent />
      <Table />
    </>
  );
}

export default Home;
