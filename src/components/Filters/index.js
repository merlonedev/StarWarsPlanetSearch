import React, { useContext } from 'react';
import Context from '../../context/Context';

const Filters = () => {
  const { name, setName } = useContext(Context);

  const renderFilterByName = () => (
    <input
      value={ name }
      data-testid="name-filter"
      onChange={ ({ target: { value } }) => setName(value) }
      placeholder="Filtrar por nome"
    />
  );

  return (
    <>
      {renderFilterByName()}
    </>
  );
};

export default Filters;
