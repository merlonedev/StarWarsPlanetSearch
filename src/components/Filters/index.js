import React, { useContext } from 'react';
import starWarsContext from '../../context/StarWarsContext';
import Select from '../Select';
import Input from '../Input';
import { comparison } from '../../data';

const Filters = () => {
  const {
    handleFilterName,
    handleClick,
    filterByNumber,
    filters } = useContext(starWarsContext);
  const { filterByNumericValues } = filters;
  let columns = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  if (filterByNumericValues.length > 0) {
    filterByNumericValues.forEach(({ column }) => {
      columns = columns.filter((element) => column !== element);
    });
  }
  return (
    <>
      <Input
        testId="name-filter"
        placeholder="Name Planet"
        onChange={ handleFilterName }
      />
      <Select
        testId="column-filter"
        name="column"
        onChange={ (e) => filterByNumber(e) }
        placeholder="column"
        options={ columns }
      />

      <Select
        testId="comparison-filter"
        name="comparison"
        options={ comparison }
        placeholder="comparison"
        onChange={ (e) => filterByNumber(e) }
      />

      <Input
        type="number"
        testId="value-filter"
        id="value-filter"
        name="value"
        onChange={ (e) => filterByNumber(e) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick() }
      >
        Filter
      </button>
    </>
  );
};
export default Filters;
