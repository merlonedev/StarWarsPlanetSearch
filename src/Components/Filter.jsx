import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';

const Filter = () => {
  const { filterText, setFilterText } = useContext(MyContext);
  const { filters } = filterText;
  const handleInput = ({ target }) => {
    setFilterText({
      filters: {
        ...filters, filterByName: { name: target.value } },
    });
  };

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleInput }
      />
    </div>
  );
};
export default Filter;
