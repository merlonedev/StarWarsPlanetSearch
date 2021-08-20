import React, { useState, useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const SelectFilter = () => {
  const selectOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const { filterNumeric } = useContext(StarWarsContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [number, setNumber] = useState('');
  const [options, setOptions] = useState(selectOptions);

  const handleClick = () => {
    if (number) {
      filterNumeric({ column, comparison, number });
      setOptions(...[options.filter((item) => item !== column)]);
    }
  };

  useEffect(() => setColumn(options[0]), [options]);

  return (
    <div>
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ ({ target: { value } }) => setColumn(value) }
      >
        {options.map((opt) => (
          <option value={ opt } key={ opt }>{opt}</option>
        ))}
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ ({ target: { value } }) => setComparison(value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        onChange={ ({ target: { value } }) => setNumber(value) }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        adicionar filtro

      </button>
    </div>
  );
};

export default SelectFilter;
