import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function InputSearch() {
  const { filter, setFilter, setSearchInput } = useContext(AppContext);

  const filterByName = (e) => {
    const newFilter = {
      ...filter,
      filterByName: { ...filter.filterByName, name: e.target.value },
    };
    setFilter(newFilter);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Pesquise..."
        data-testid="name-filter"
        onChange={ (e) => {
          setSearchInput(e.target.value);
          filterByName(e);
        } }
      />
    </div>
  );
}
