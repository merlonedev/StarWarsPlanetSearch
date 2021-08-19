import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/Context';

const INITIAL_COLUMN_FILTERS = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
];

export default function Filter() {
  const [nameSearch, setNameSearch] = useState('');
  const [columnFilters, setColumnFilters] = useState(INITIAL_COLUMN_FILTERS);
  const [numericSearch, setNumericSearch] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const {
    setFilterByName, setFilterByNumericValues, filters,
  } = useContext(AppContext);

  const { filterByNumericValues } = filters;

  const handleChange = ({ target }) => {
    const { value } = target;
    setNameSearch(value);
  };

  const handleNumericSearchChange = ({ target }) => {
    const { name, value } = target;
    setNumericSearch({ ...numericSearch, [name]: value });
  };

  useEffect(() => {
    setFilterByName(nameSearch);
  }, [nameSearch, setFilterByName]);

  const filterColumnsFilter = () => {
    const filtered = columnFilters.filter((column) => column !== numericSearch.column);
    setNumericSearch({ ...numericSearch, column: filtered[0] });
    setColumnFilters(filtered);
  };

  const { column, comparison, value } = numericSearch;

  return (
    <div className="filters">
      <label htmlFor="name">
        <input
          type="text"
          value={ nameSearch }
          name="name"
          id="name"
          data-testid="name-filter"
          onChange={ handleChange }
        />
      </label>
      <form className="numeric-filter">
        <label htmlFor="column-filter">
          <select
            value={ column }
            onChange={ handleNumericSearchChange }
            name="column"
            id="column-filter"
            data-testid="column-filter"
          >
            {columnFilters
              .map((filter, i) => (<option key={ i } value={ filter }>{filter}</option>))}
          </select>
        </label>
        <label htmlFor="comparison-filter">
          <select
            value={ comparison }
            onChange={ handleNumericSearchChange }
            name="comparison"
            id="comparison-filter"
            data-testid="comparison-filter"
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <input
          name="value"
          value={ value }
          onChange={ handleNumericSearchChange }
          type="number"
          data-testid="value-filter"
        />
        <button
          onClick={ (evt) => {
            evt.preventDefault();
            setFilterByNumericValues([...filterByNumericValues, numericSearch]);
            filterColumnsFilter();
          } }
          data-testid="button-filter"
          type="submit"
        >
          Filtrar
        </button>
      </form>
    </div>
  );
}
