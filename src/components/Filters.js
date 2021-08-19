import React, { useContext } from 'react';
import Context from '../context/Context';
import Input from './Input';

function Filters() {
  const { filtersState: { filters: { filterByName } } } = useContext(Context);

  const handleChange = () => {
    console.log('mudança no filtro');
  };

  return (
    <section>
      <Input
        testid="name-filter"
        value={ filterByName.name }
        onChange={ handleChange }
      />
    </section>
  );
}

export default Filters;
