import React, { useContext } from 'react';
import Context from '../context/context';

function NameFilter() {
  const { globalState, setGlobalState } = useContext(Context);

  const inputHandler = ({ target: { id, value } }) => {
    setGlobalState({ ...globalState, [id]: value });
  };

  return (
    <input
      type="text"
      data-testid="name-filter"
      id="filterByName"
      onChange={ inputHandler }
    />
  );
}

export default NameFilter;
