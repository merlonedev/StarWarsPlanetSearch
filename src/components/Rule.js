import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Context } from '../Provider';

function Rule({ children, index }) {
  const { Filter: [filters,, setFilter] } = useContext(Context);
  function removeRule() {
    setFilter({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues.filter((_, i) => (
          i !== index
        )),
      ],
    });
  }
  return (
    <div className="rule" data-testid="filter">
      <span>
        {children}
      </span>
      <button type="button" onClick={ removeRule }>x</button>
    </div>
  );
}

Rule.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
};

export default Rule;
