import React, { useContext } from 'react';
import Table from './Table';
import Context from '../context/context';

function Loaded() {
  const { globalState, setGlobalState } = useContext(Context);

  const inputHandler = ({ target: { id, value } }) => {
    setGlobalState({ ...globalState, [id]: value });
  };

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        id="filterByName"
        onChange={ inputHandler }
      />
      <Table />
    </div>
  );
}

export default Loaded;
