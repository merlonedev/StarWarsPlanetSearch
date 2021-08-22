import React, { useContext, useState } from 'react';
import Context from '../../../context/Context';
import { optionsColumn, optionsComparison } from '../../../helper/SelectOptions';

const NumericFilters = () => {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const { setFilterByNumericValues } = useContext(Context);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFilterByNumericValues((prevState) => ([
      ...prevState,
      {
        column,
        comparison,
        value,
      },
    ]));
  };

  return (
    <form onSubmit={ handleSubmit }>
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ ({ target }) => setColumn(target.value) }
      >
        {optionsColumn.map((opt) => <option key={ opt }>{opt}</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ ({ target }) => setComparison(target.value) }
      >
        {optionsComparison.map((opt) => <option key={ opt }>{opt}</option>)}
      </select>
      <label htmlFor="value">
        Value:
        {' '}
        <input
          data-testid="value-filter"
          type="number"
          value={ value }
          onChange={ ({ target }) => setValue(target.value) }
        />
      </label>
      <button
        data-testid="button-filter"
        type="submit"
      >
        Filtrar
      </button>
    </form>
  );
};

export default NumericFilters;
