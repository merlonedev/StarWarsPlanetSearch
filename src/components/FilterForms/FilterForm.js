import React from 'react';
import NameInput from './NameInput';
import NumericInput from './NumericInput';
import OrderInput from './OrderInput';

function FilterForm() {
  return (
    <form>
      <NameInput />
      <NumericInput />
      <OrderInput />
    </form>
  );
}

export default FilterForm;
