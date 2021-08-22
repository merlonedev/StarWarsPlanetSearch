import React, { useContext } from 'react';
import Context from '../../../context/Context';

const SearchInput = () => {
  const {
    filters: { filterByName: { name } }, setInput,
  } = useContext(Context);

  const inputNameFilter = () => (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        value={ name }
        onChange={ ({ target: { value } }) => setInput(value) }
      />
    </div>
  );

  return (
    inputNameFilter()
  );
};
export default SearchInput;
