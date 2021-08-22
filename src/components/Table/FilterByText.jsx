import React from 'react';
import Context from '../../context/Context';

function FilterByText() {
  const { filterText } = React.useContext(Context);
  return (

    <div>
      <label htmlFor="name-filter">
        <input data-testid="name-filter" type="text" onChange={ (e) => filterText(e) } />
      </label>
    </div>
  );
}

export default FilterByText;
