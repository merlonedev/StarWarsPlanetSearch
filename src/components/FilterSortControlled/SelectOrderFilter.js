import React, { useContext } from 'react';
import Context from '../../context/Context';

function SelectOrderFilter() {
  const { newListPlanets, orderColumn, setOrderColumn } = useContext(Context);

  const OPTIONS = Object.keys(newListPlanets[0]);

  const handleChange = ({ target: { value } }) => setOrderColumn(value);

  const NUMBER_RAMDOM = 10000;

  return (
    <label htmlFor="column-sort">
      Ordenada por:
      <select
        data-testid="column-sort"
        id="column-sort"
        name="orderColumn"
        value={ orderColumn }
        onChange={ handleChange }
      >
        { OPTIONS.map((option) => (
          <option key={ Math.random() * NUMBER_RAMDOM } value={ option }>
            { option }
          </option>
        )) }
      </select>
    </label>
  );
}

export default SelectOrderFilter;
