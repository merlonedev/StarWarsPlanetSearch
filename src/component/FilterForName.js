import React, { useContext } from 'react';
import ContextApi from '../Context/ContextApi';

export default function FilterForName() {
  const { setFilter } = useContext(ContextApi);

  const handleChange = ({ target }) => {
    setFilter({ filterByName: { name: target.value } });
  };

  return (
    <form>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleChange }
      />
    </form>
  );
}
