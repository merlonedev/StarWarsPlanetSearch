import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Header() {
  const { setNameSearch,
    setNumberSearch,
    comparison,
    setComparison,
    param,
    setParam } = useContext(PlanetsContext);
  const selectOptions = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];
  const comparisonSelector = ['maior que', 'menor que', 'igual a'];
  const [selector, setSelector] = useState(selectOptions);
  const handleClick = () => {
    console.log(param);
    console.log(comparison);
    let indice = selectOptions.indexOf(param);
    while (indice >= 0) {
      selectOptions.splice(indice, 1);
      indice = selectOptions.indexOf(param);
    }
    setSelector(selectOptions);
    console.log(selectOptions);
  };

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
          {selector.map((option) => <option key={ option }>{ option }</option>)}
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
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Buscar
        </button>
      </form>
    </nav>
  );
}

export default Header;
