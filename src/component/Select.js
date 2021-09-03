import React, { useContext, useState } from 'react';
import ContextApi from '../Context/ContextApi';

function Select() {
  const { options, setFilter, filter, setOptions } = useContext(ContextApi);
  const [dropValue, setDropValue] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const onChange = ({ target: { name, value } }) => {
    setDropValue({ ...dropValue, [name]: value });
  };

  const onClick = () => {
    const newFilter = {
      ...filter,
      filterByNumericValues: [
        ...filter.filterByNumericValues,
        dropValue,
      ],
    };
    setFilter(newFilter);

    const newArray = options.COLUMN_OPTIONS.filter(
      (option) => option !== dropValue.column,
    );
    const newOptions = {
      ...options,
      COLUMN_OPTIONS: newArray,
    };
    setOptions(newOptions);
  };

  return (
    <>
      <select data-testid="column-filter" onChange={ onChange } name="column">
        {options.COLUMN_OPTIONS.map((value) => (
          <option key={ value } value={ value }>{ value }</option>
        ))}
      </select>
      <select data-testid="comparison-filter" onChange={ onChange } name="comparison">
        {options.COMPARISON_OPTIONS.map((value) => (
          <option key={ value } value={ value }>{ value }</option>
        ))}
      </select>
      <input
        type="number"
        onChange={ onChange }
        data-testid="value-filter"
        name="value"
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ onClick }
      >
        Adicionar filtro
      </button>
    </>
  );
}

export default Select;
