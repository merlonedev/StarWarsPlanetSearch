import React, { useContext } from 'react';
import optionsComparison from '../../../helper/OptionsComparison';
import StarWarsPlanetsContext from '../../../context/StarWarsPlanetsContext';

const SelectComparison = () => {
  const { setComparison } = useContext(StarWarsPlanetsContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    console.log(value);
    setComparison(value);
  };

  return (
    <select
      data-testid="comparison-filter"
      onChange={ handleChange }
    >
      {optionsComparison.map((opt) => (
        <option
          key={ opt }
        >
          {opt}
        </option>
      ))}
    </select>
  );
};

export default SelectComparison;
