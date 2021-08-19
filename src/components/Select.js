import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';

const Select = () => {
  const {
    setFilters,
    filters,
    setFiltrados,
    result } = useContext(AppContext);
  const columns = [
    'population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  const [selects, setSelects] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  const handleChange = ({ target: { value, name } }) => {
    setSelects({ ...selects, [name]: value });
  };

  const filterPlanets = () => {
    const filterData = result.filter((item) => {
      const inputEntry = Number(selects.value);
      console.log(inputEntry);
      const valueData = Number(item[selects.column]);
      console.log(valueData);

      switch (selects.comparison) {
      case 'maior que':
        return valueData > inputEntry;
      case 'menor que':
        return valueData < inputEntry;
      default:
        return valueData === inputEntry;
      }
    });
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        selects,
      ],
    });
    setFiltrados(filterData);
  };

  return (
    <div>
      <select
        value={ filters.filterByNumericValues.column }
        onChange={ handleChange }
        data-testid="column-filter"
        name="column"
      >
        {
          columns.map((item, key) => (
            <option value={ item } key={ key }>{ item }</option>
          ))
        }
      </select>
      <select
        name="comparison"
        onChange={ handleChange }
        data-testid="comparison-filter"
      >
        <option name="comparison" value="maior que">maior que</option>
        <option name="comparison" value="menor que">menor que</option>
        <option name="comparison" value="igual a">igual a</option>
      </select>
      <input
        name="value"
        type="number"
        data-testid="value-filter"
        value={ selects.value }
        onChange={ handleChange }
      />
      <button
        onClick={ filterPlanets }
        type="button"
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
};

export default Select;
