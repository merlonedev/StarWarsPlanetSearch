import React, { useContext, useState } from 'react';
import MyContext from '../../context';

const NumericFilter = () => {
  const { filters, setFilter } = useContext(MyContext);
  const { filterByNumericValues } = filters;
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');
  const [columns, setColumns] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const handleSubmit = () => {
    setFilter({
      ...filters,
      filterByNumericValues: [
        ...filterByNumericValues,
        {
          column,
          comparison,
          value,
        },
      ],
    });
    setColumns(
      () => columns.filter((item) => item !== column),
    );
  };

  return (
    <form>
      <label htmlFor="colum-filter">
        Column:
        <select
          data-testid="column-filter"
          onChange={ (e) => setColumn(e.target.value) }
          name="column"
          value={ column }
        >
          {
            columns.map((item, index) => (
              <option key={ index } value={ item }>{ item }</option>
            ))
          }
        </select>
      </label>

      <label htmlFor="comparison-filter">
        Comparison:
        <select
          data-testid="comparison-filter"
          name="comparison"
          value={ comparison }
          onChange={ (e) => setComparison(e.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
      </label>

      <label htmlFor="value-filter">
        Value:
        <input
          type="number"
          data-testid="value-filter"
          name="value"
          onChange={ (e) => setValue(e.target.value) }
          value={ value }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleSubmit }
      >
        Adicionar filtro
      </button>

    </form>
  );
};

export default NumericFilter;
