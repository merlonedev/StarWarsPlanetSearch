import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

function DeleteFilter() {
  const {
    filters: { filterByNumericValues },
    setFilterByNumericValues,
  } = useContext(AppContext);

  const deleteButton = (index) => (
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
              {deleteButton(index)}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return null;
}

export default DeleteFilter;
