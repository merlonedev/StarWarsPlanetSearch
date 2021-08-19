import React, { useContext } from 'react';
import TabletPlanets from '../components/TablePlanets';
import Context from '../context/Context';
import InputFilterName from '../components/InputFilterName';
import NumberFilters from '../components/NumberFilters';

function Home() {
  const { isLoading } = useContext(Context);
  if (isLoading) {
    return <h1>Carregando...</h1>;
  }
  return (
    <>
      <InputFilterName />
      <NumberFilters />
      <TabletPlanets />
    </>
  );
}

export default Home;
