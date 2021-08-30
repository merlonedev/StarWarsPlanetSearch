import React, { useContext, useState } from 'react';
import StarContext from '../context/StarContext';

function NumberFilter() {
  const {
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
    filterUsed,
    setFilterUsed } = useContext(StarContext);

  const [comparison, setComparison] = useState('maior que');
  const [column, setColumn] = useState('population');
  const [value, setValue] = useState('');
  const options = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  const handleClick = () => {
    setFilterUsed([...filterUsed, column]);
    setFilterByName('');
    setFilterByNumericValues([...filterByNumericValues, { column, comparison, value }]);
  };
  const newOptions = options.filter((opti) => (!filterUsed.includes(opti)));

  return (
    <form>
      <label htmlFor="column-filter" className="filters">
        Select attribute:
        <select
          className="filters"
          data-testid="column-filter"
          id="column-filter"
          value={ column }
          name="column"
          onChange={ ({ target: { value: newColumn } }) => setColumn(newColumn) }
        >
          {newOptions.map((opt) => (
            <option key={ opt } value={ opt }>{opt}</option>
          ))}
        </select>
      </label>
      <label htmlFor="comparison-filter" className="filters">
        <select
          className="filters"
          data-testid="comparison-filter"
          id="comparison-filter"
          value={ comparison }
          name="comparison"
          onChange={
            ({ target: { value: newComparison } }) => setComparison(newComparison)
          }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          data-testid="value-filter"
          id="value-filter"
          value={ value }
          name="value"
          onChange={ ({ target: { value: newValue } }) => setValue(newValue) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        <span className="material-icons-outlined">
          filter_alt
        </span>
      </button>
    </form>
  );
}

export default NumberFilter;
