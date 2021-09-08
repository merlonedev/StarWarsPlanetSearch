import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../../context/AppContext';
import DeleteFilter from './DeleteFilter';

const NumericFilters = () => {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const {
    setFilterByNumericValues,
    columnsOptions,
  } = useContext(AppContext);

  const optionsComparison = [
    'maior que',
    'igual a',
    'menor que',
  ];

  const {
    filters: { filterByName: { name } }, setInput,
  } = useContext(AppContext);

  const inputNameFilter = () => (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        value={ name }
        onChange={ ({ target: { value: type } }) => setInput(type) }
      />
    </div>
  );

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

  useEffect(() => {
    if (columnsOptions.length > 0) setColumn(columnsOptions[0]);
  }, [columnsOptions]);

  return (
    <form onSubmit={ handleSubmit }>
      <DeleteFilter />
      { inputNameFilter() }
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ ({ target }) => setColumn(target.value) }
      >
        {columnsOptions.map((opt) => <option key={ opt }>{opt}</option>)}
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
