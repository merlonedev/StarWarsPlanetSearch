import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';
import Table from './Table';

const Filters = () => {
  const [filterName, setFilterName] = useState('');
  const { data } = useContext(AppContext);

  const handleChange = ({ target: { value } }) => {
    setFilterName(value);
  };

  const contextValue = {
    data,
    filters: {
      filterByName: {
        name: filterName,
      },
    },
  };

  return (
    <AppContext.Provider value={ contextValue }>
      <div>
        <input
          data-testid="name-filter"
          type="text"
          onChange={ handleChange }
          value={ filterName }
        />
        <Table />
      </div>
    </AppContext.Provider>
  );
};

export default Filters;
