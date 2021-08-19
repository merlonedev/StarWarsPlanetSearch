import React, { useContext } from 'react';
import Context from '../context/Context';

function SelectFilterProperties() {
  const {
    column,
    setColumn,
    optionsProperties,
  } = useContext(Context);

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
        { optionsProperties.map((option) => (
          <option key={ Math.random() * NUMBER_RAMDOM } value={ option }>
            { option}
          </option>
        )) }
      </select>
    </label>
  );
}

export default SelectFilterProperties;
