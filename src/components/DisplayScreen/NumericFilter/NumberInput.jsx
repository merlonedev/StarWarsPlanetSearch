import React, { useContext } from 'react';
import StarWarsPlanetsContext from '../../../context/StarWarsPlanetsContext';

const NumberInput = () => {
  const { setValue } = useContext(StarWarsPlanetsContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setValue(value);
  };

  return (
    <input
      data-testid="value-filter"
      type="number"
      onChange={ handleChange }
    />
  );
};

export default NumberInput;
