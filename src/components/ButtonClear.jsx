import React from 'react';
import PropTypes from 'prop-types';

export default function ButtonClear(props) {
  const { setdata, setfilter, setfilterused, DataOriginal } = props;
  return (
    <div
      data-testid="filter"
    >
      <button
        type="button"
        onClick={ () => {
          setdata([...DataOriginal]);
          setfilter(['population', 'maior que', '0']);
          setfilterused([]);
        } }
      >
        X
      </button>
    </div>
  );
}

ButtonClear.propTypes = {
  DataOriginal: PropTypes.string.isRequired,
  setfilter: PropTypes.func.isRequired,
  setfilterused: PropTypes.func.isRequired,
  setdata: PropTypes.func.isRequired,
};
