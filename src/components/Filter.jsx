import React, { useContext, useState } from 'react';
import { PlanetsContext } from '../context/PlanetsContext';

const Filter = () => {
  const { updateFilters, filtersOptions } = useContext(PlanetsContext);
  const [parameter, setParameter] = useState('population');
  const [measure, setMeasure] = useState('maior que');
  const [value, setValue] = useState(0);

  return (
    <>
      <input
        data-testid="name-filter"
        onChange={ ({ target }) => updateFilters(target) }
        name="filterByName"
      />
      <select
        value={ parameter }
        onChange={ ({ target }) => setParameter(target.value) }
        data-testid="column-filter"
      >
        {
          filtersOptions.map((e) => <option key={ e } value={ e }>{e}</option>)
        }
      </select>
      <select
        value={ measure }
        onChange={ ({ target }) => setMeasure(target.value) }
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        value={ value }
        onChange={ ({ target }) => setValue(target.value) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => updateFilters(
          { name: 'filterByNumericValues', value: { parameter, measure, value } },
        ) }
      >
        Filtrar

      </button>
    </>
  );
};

export default Filter;
