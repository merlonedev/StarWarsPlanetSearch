import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';

function SelectColumn({ testId, name }) {
  const { handleChangeColumn, options } = useContext(MyContext);

  return (
    <select
      name={ name }
      data-testid={ testId }
      onChange={ handleChangeColumn }
    >
      {
        options.map((option) => <option key={ option }>{ option }</option>)
      }
    </select>
  );
}

SelectColumn.propTypes = {
  name: PropTypes.string,
  testId: PropTypes.string,
}.isRequired;

export default SelectColumn;
