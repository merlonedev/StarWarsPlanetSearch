import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/Context';

export default function Filter() {
  const [nameSearch, setNameSearch] = useState('');
  const [numericSearch, setNumericSearch] = useState({
    column: 'population',
    comparison: 'higher',
    value: '',
  });
  const { setFilterByName, setFilterByNumericValues } = useContext(AppContext);
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
  const columnFilters = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
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
            <option value="higher">maior que</option>
            <option value="lower">menor que</option>
            <option value="equal">igual a</option>
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
            setFilterByNumericValues(numericSearch);
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
