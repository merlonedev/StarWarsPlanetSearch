import React, { useContext } from 'react';
import Context from '../../context/Context';

function RadiosOrderFilter() {
  const { orderRadios, setOrderRadios } = useContext(Context);

  const handleChange = ({ target: { value } }) => setOrderRadios(value);

  return (
    <>
      <label htmlFor="orderRadios">
        ASC
        <input
          data-testid="column-sort-input-asc"
          type="radio"
          value="ASC"
          name="orderRadios"
          checked={ orderRadios === 'ASC' }
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="orderRadios">
        DESC
        <input
          data-testid="column-sort-input-desc"
          type="radio"
          value="DESC"
          name="orderRadios"
          checked={ orderRadios === 'DESC' }
          onChange={ handleChange }
        />
      </label>
    </>
  );
}

export default RadiosOrderFilter;
