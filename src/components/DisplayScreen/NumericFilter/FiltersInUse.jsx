import React, { useContext } from 'react';
import Context from '../../../context/Context';

const FiltersInUse = () => {
  const {
    filters: { filterByNumericValues },
    setFilterByNumericValues,
  } = useContext(Context);

  const deleteX = (index) => (
    <button
      type="button"
      onClick={ () => {
        setFilterByNumericValues(filterByNumericValues.filter((_filt, i) => i !== index));
      } }
    >
      X
    </button>
  );

  if (filterByNumericValues.length > 0) {
    return (
      <div>
        <ul>
          {filterByNumericValues.map(({ column, comparison, value }, index) => (
            <li key={ index } data-testid="filter">
              {`${column} | ${comparison} | ${value}`}
              {deleteX(index)}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return null;
};

export default FiltersInUse;
