import React, { useContext } from 'react';
import TabletPlanets from '../components/TablePlanets';
import Context from '../context/Context';
import InputFilterName from '../components/InputFilterName';
import SelectFilterProperties from '../components/SelectFilterProperties';
import SelectFilterComparation from '../components/SelectFilterComparation';

function Home() {
  const { isLoading } = useContext(Context);
  if (isLoading) {
    return <h1>Carregando...</h1>;
  }
  return (
    <>
      <InputFilterName />
      <SelectFilterProperties />
      <SelectFilterComparation />
      <TabletPlanets />
    </>
  );
}

export default Home;
