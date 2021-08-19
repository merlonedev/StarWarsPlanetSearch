import React, { useContext } from 'react';
import Context from '../context/Context';

function SelectFilterComparation() {
  const {
    comparison,
    setComparison,
    optionsComparation,
    setOptionsComparation,
  } = useContext(Context);

  const handleChange = ({ target: { value } }) => setComparison(value);

  const NUMBER_RAMDOM = 10000;

  return (
    <label htmlFor="column-filter">
      Filtre pela Propriedade:
      <select
        data-testid="comparison-filter"
        id="comparison-filter"
        name="comparison"
        value={ comparison }
        onChange={ handleChange }
      >
        { optionsComparation.map((option) => (
          <option key={ Math.random() * NUMBER_RAMDOM } value={ option }>
            { option }
          </option>
        )) }
      </select>
    </label>
  );
}

export default SelectFilterComparation;
