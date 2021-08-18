import React, { useContext } from 'react';
import TabletPlanets from '../components/TablePlanets';
import Context from '../context/Context';

function Home() {
  const { isLoading } = useContext(Context);
  if (isLoading) {
    return <h1>Carregando...</h1>;
  }
  return (
    <TabletPlanets />
  );
}

export default Home;
