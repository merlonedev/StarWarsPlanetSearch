import React from 'react';
import FilterByNumericValues from './FilterByNumericValues';
import FilterByColumn from './FilterByColumn';
import FilterByName from './FilterByName';
import FilterByComparison from './FilterByComparison';
import FiltersButton from './FiltersButton';
// import PropTypes from 'prop-types';

function Filters(/* props */) {
  return (
    <div>
      <FilterByColumn />
      <FilterByComparison />
      <FilterByNumericValues />
      <FilterByName />
      <FiltersButton />
    </div>
  );
}

// Filters.propTypes = {

// };

export default Filters;
