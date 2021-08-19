import React, { useContext } from 'react';
import Context from '../context/Context';

function SelectFilterProperties() {
  const { column, setColumn } = useContext(Context);

  const optionsArray = [
    { value: 'population', text: 'population' },
    { value: 'orbital_period', text: 'orbital_period' },
    { value: 'diameter', text: 'diameter' },
    { value: 'rotation_period', text: 'rotation_period' },
    { value: 'surface_water', text: 'surface_water' },
  ];

  const handleChange = ({ target: { value } }) => setColumn(value);

  const NUMBER_RAMDOM = 10000;

  return (
    <label htmlFor="column-filter">
      Filtre pela Propriedade:
      <select
        data-testid="column-filter"
        id="column-filter"
        name="column"
        value={ column }
        onChange={ handleChange }
      >
        { optionsArray.map((option) => (
          <option key={ Math.random() * NUMBER_RAMDOM } value={ option.value }>
            { option.text }
          </option>
        )) }
      </select>
    </label>
  );
}

export default SelectFilterProperties;
