import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Inputs() {
  const { filter, setFilter } = useContext(MyContext);
  const { filterByName: { name } } = filter;

  const handleChange = ({ target: { value } }) => {
    setFilter({
      ...filter,
      filterByName: {
        name: value,
      },
    });
  };

  return (
    <form>
      <label htmlFor="searchName">
        <input
          data-testid="name-filter"
          name="searchName"
          type="text"
          placeholder="Filtrar por nome"
          value={ name }
          onChange={ handleChange }
        />
      </label>
    </form>
  );
}

export default Inputs;
