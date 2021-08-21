import React from 'react';
import PropTypes from 'prop-types';

function Option(props) {
  const { option } = props;
  return (
    <option>{ option }</option>
  );
}

Option.propTypes = {
  option: PropTypes.string.isRequired,
};

export default Option;
