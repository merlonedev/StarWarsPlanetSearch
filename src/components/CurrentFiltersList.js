import React from 'react';
import PropTypes from 'prop-types';

function CurrentFiltersList({ filters, onClick }) {
  return (
    <section>
      { filters.map((filter, index) => (
        <div key={ index } data-testid="filter">
          <p>{ filter }</p>
          <button
            type="button"
            onClick={ () => onClick(filter) }

          >
            X
          </button>
        </div>
      ))}
    </section>
  );
}

CurrentFiltersList.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CurrentFiltersList;
