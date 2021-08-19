import React from 'react';
import OrderForm from './OrderForm';
import NumFiltersForm from './NumFiltersForm';
import NameFilterForm from './NameFilterForm';

const Filters = () => (
  <main>
    <OrderForm />
    <NameFilterForm />
    <NumFiltersForm />
  </main>
);

export default Filters;
