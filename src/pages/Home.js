import React, { useContext } from 'react';
import TabletPlanets from '../components/TablePlanets';
import Context from '../context/Context';
import InputFilterName from '../components/InputFilterName';
import SelectFilterProperties from '../components/SelectFilterProperties';
import SelectFilterComparation from '../components/SelectFilterComparation';
import InputFilterValue from '../components/InputFilterValue';
import ButtonFilter from '../components/ButtonFilter';
import ButtonResetFilters from '../components/ButtonResetFilters';

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
      <InputFilterValue />
      <ButtonFilter />
      <ButtonResetFilters />
      <TabletPlanets />
    </>
  );
}

export default Home;
