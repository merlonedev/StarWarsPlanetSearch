import React from 'react';
import Context from '../context/Context';

export default function FilterByText() {
  const { FilterByTextValue } = React.useContext(Context);

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ (e) => FilterByTextValue(e) }
      />
    </div>
  );
}
