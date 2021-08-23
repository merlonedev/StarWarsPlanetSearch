import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Header() {
  const { setNameSearch,
    setNumberSearch,
    setComparison,
    setParam } = useContext(PlanetsContext);
  const selectOptions = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];
  const comparisonSelector = ['maior que', 'menor que', 'igual a'];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          data-testid="name-filter"
          onChange={ ({ target: { value } }) => setNameSearch(value) }
        />
        <select
          className="form-control me-2"
          type="search"
          placeholder="Search"
          data-testid="column-filter"
          onChange={ ({ target: { value } }) => setParam(value) }
        >
          {selectOptions.map((option) => <option key={ option }>{ option }</option>)}
        </select>
        <select
          className="form-control me-2"
          type="search"
          placeholder="Search"
          data-testid="comparison-filter"
          onChange={ ({ target: { value } }) => setComparison(value) }
        >
          {comparisonSelector.map((option) => <option key={ option }>{ option }</option>)}
        </select>
        <input
          className="form-control me-2"
          type="number"
          placeholder="Search"
          data-testid="value-filter"
          onChange={ ({ target: { value } }) => setNumberSearch(value) }
        />
        <button
          className="btn btn-primary"
          type="submit"
          data-testid="button-filter"
        >
          Buscar
        </button>
      </form>
    </nav>
  );
}

export default Header;
