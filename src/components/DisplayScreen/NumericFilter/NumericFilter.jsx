import React from 'react';
import SelectComparison from './SelectComparison';
import SelectFilter from './SelectFilter';
import NumberInput from './NumberInput';
import BtnAddFilter from './BtnAddFilter';

const NumericFilter = () => (
  <div>
    <div>
      <SelectFilter />
    </div>
    <div>
      <SelectComparison />
    </div>
    <div>
      <NumberInput />
    </div>
    <div>
      <BtnAddFilter />
    </div>
  </div>
);

export default NumericFilter;
