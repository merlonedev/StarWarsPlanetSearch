import React, { useContext } from 'react';

import ApiContext from '../../context/ApiContext';
import filtersStructure from '../../services/filtersStructure';

function App() {
  const { data, setFilteredData, filters, setFilters } = useContext(ApiContext);

  return (
    <div>
      <p>{JSON.stringify(filters)}</p>
      <button
        type="button"
        onClick={ () => {
          setFilters(filtersStructure);
          setFilteredData(data);
        } }
      >
        X
      </button>
    </div>
  );
}

export default App;
