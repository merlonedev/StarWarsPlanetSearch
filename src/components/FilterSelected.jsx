import React, { useContext } from 'react';
import Context from '../context/context';

function FilterSelected() {
  const {
    filters: {
      filterNumericValues,
    },
    setFilterNumericValues,
  } = useContext(Context);

  const handleClick = (del) => {
    const filterDelet = filterNumericValues.filter((select) => select !== del);
    setFilterNumericValues([...filterDelet]);
  };

  return (
    <div>
      {filterNumericValues.map((filter, index) => (
        <div key={ index } data-testid="filter">
          {filter.column}
          <button type="button" onClick={ () => handleClick(filter) }>X</button>
        </div>
      ))}
    </div>
  );
}

export default FilterSelected;
