import React from 'react';

function Apply() {
  function applyFilters() {
    return 0;
  }

  return (
    <button type="button" data-testid="button-filter" onClick={ applyFilters }>
      Aplicar
    </button>
  );
}

export default Apply;
