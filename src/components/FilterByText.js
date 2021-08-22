import React from 'react';
import Context from '../context/Context';

export default function FilterByText() {
  const { handleFilterPlanetByText } = React.useContext(Context);

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ (e) => handleFilterPlanetByText(e) }
      />
    </div>
  );
}
