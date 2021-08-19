import React, { useContext } from 'react';
import StarWarsPlanetsContext from '../../../context/StarWarsPlanetsContext';
import optionsFilter from '../../../helper/OptionsFilter';

const SelectFilter = () => {
  const { setColumn } = useContext(StarWarsPlanetsContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setColumn(value);
  };

  return (
    <select
      data-testid="column-filter"
      onChange={ handleChange }
    >
      {optionsFilter.map((opt) => (
        <option
          key={ opt }
        >
          {opt}
        </option>
      ))}
    </select>
  );
};

export default SelectFilter;
