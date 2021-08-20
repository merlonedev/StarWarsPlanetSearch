import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import './Filter.css';

const Filter = () => {
  const [name, setName] = useState('');
  const { data, setFilterByName, setDataFiltered } = useContext(AppContext);

  useEffect(() => {
    setFilterByName({ name });
    setDataFiltered(data.filter((dataFiltered) => dataFiltered.name.toLowerCase()
      .includes(name)));
  }, [name]);

  const handleChange = ({ target: { value } }) => {
    setName(value);
  };

  return (
    <div className="name-filter-container">
      <label htmlFor="name-filter" className="name-filter-label">
        <input
          type="text"
          className="name-filter"
          id="name-filter"
          data-testid="name-filter"
          name="name"
          placeholder="Nome do planeta"
          value={ name }
          onChange={ handleChange }
        />
      </label>
    </div>
  );
};

export default Filter;
