import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function FiltroNomee() {
  const { contextValu: { functions: { filtroNome } } } = useContext(AppContext);
  return (
    <input
      onChange={ filtroNome }
      data-testid="name-filter"
      type="text"
      placeholder="Procure um planeta"
    />
  );
}

export default FiltroNomee;
