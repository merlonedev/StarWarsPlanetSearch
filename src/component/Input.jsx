import React, { useState, useContext } from 'react';
import MyContext from '../context/myContext';

const Input = () => {
  const [text, setText] = useState('');
  const { filters, setFilter } = useContext(MyContext);
  const handleChange = ({ target }) => {
    setText(target.value);
    setFilter({ ...filters, filterByName: target.value });
  };
  return (
    <label htmlFor="filterByName">
      Filter by planet name:
      <input
        id="filterByName"
        name="filterName"
        placeholder="nome do planeta"
        data-testid="name-filter"
        value={ text }
        onChange={ handleChange }
        type="text"
      />
    </label>
  );
};

export default Input;
