import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function InputSearch() {
  const { setSearchInput } = useContext(AppContext);

  return (
    <div>
      <input
        type="text"
        placeholder="Pesquise..."
        data-testid="name-filter"
        onChange={ (e) => { setSearchInput(e.target.value); } }
      />
    </div>
  );
}
