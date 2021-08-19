import React from 'react';
import NameInput from './NameInput';
import NumericInput from './NumericInput';

function FilterForm() {
  return (
    <form>
      <NameInput />
      <NumericInput />
    </form>
  );
}

export default FilterForm;
