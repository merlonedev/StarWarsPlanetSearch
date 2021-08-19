import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../ContextStuff/Context';

export default function SelectColumnFilter({ updateFilter }) {
  const { options } = useContext(Context);
  return (
    <label htmlFor="column-filter">
      Selecione uma coluna de valores
      <select name="column" data-testid="column-filter" onChange={ updateFilter }>
        { options
          .map((option, id) => <option key={ id } value={ option }>{ option }</option>) }
      </select>
    </label>
  );
}

SelectColumnFilter.propTypes = {
  updateFilter: PropTypes.func,
}.isRequired;
