import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const Filters = () => {
  const { handleNameFilter } = useContext(MyContext);
  return (
    <section>
      <input type="text" data-testid="name-filter" onChange={ handleNameFilter } />
    </section>
  );
};

export default Filters;
