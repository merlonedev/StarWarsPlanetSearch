import React, { useState, useContext } from 'react';
import Context from '../context/context';

function Header() {
  const { setFilterName } = useContext(Context);
  const {
    filters: { filterNumericValues }, setfilterNumericValues } = useContext(Context);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('100000');
  const [filter, setFilter] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const handleChange = ({ target: { value: val } }) => {
    setFilterName(val);
  };

  const handleFilterButton = () => {
    const numerics = {
      column,
      comparison,
      value,
    };
    setfilterNumericValues([...filterNumericValues, numerics]);
    const filterSelected = filter.filter((select) => select !== column);
    setFilter([...filterSelected]);
  };

  return (
    <header>
      <h1>Star Wars Search Planets</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={ handleChange }
        data-testid="name-filter"
      />
      <div>
        <select
          data-testid="column-filter"
          value={ column }
          onChange={ ({ target: { value: val } }) => setColumn(val) }

        >
          {filter.map((fil) => <option key={ fil } value={ fil }>{fil}</option>)}
        </select>
        <select
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ ({ target: { value: val } }) => setComparison(val) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          data-testid="value-filter"
          type="number"
          value={ value }
          onChange={ ({ target: { value: val } }) => setValue(val) }

        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={ handleFilterButton }
        >
          Filtrar
        </button>
      </div>
    </header>
  );
}

export default Header;
