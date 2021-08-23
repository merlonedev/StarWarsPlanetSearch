import React, { useContext } from 'react';
import Table from './Table';
import NumericFilter from './NumericFilter';
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
      <NumericFilter />
      <Table />
    </div>
  );
}

export default Loaded;
