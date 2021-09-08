import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import Selector from './Selector';

function Header() {
  const { filters,
    setFilters,
    filterOptions,
    setFilterOptions } = useContext(MyContext);

  const columnsOptions = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];
  const comparisonOptions = ['maior que', 'menor que', 'igual a'];

  const handleChange = ({ target: { name, value } }) => {
    setFilterOptions((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [{
        ...filterOptions,
      },
      ],
    });
  };

  return (
    <header>
      <h1> Star Wars Planets </h1>
      <form>
        <div>
          <label htmlFor="filterByName">
            Filter By Name:
            <input
              id="filterByName"
              data-testid="name-filter"
              onChange={ ({ target: { value } }) => setFilters({
                ...filters,
                filterByName: {
                  name: value,
                },
              }) }
            />
          </label>
        </div>
        <div>
          <Selector
            testid="column-filter"
            options={ columnsOptions }
            name="column"
            value={ filterOptions.column }
            handleChange={ handleChange }
          />
          <Selector
            testid="comparison-filter"
            options={ comparisonOptions }
            name="comparison"
            value={ filterOptions.comparison }
            handleChange={ handleChange }
          />
          <input
            type="number"
            data-testid="value-filter"
            name="value"
            value={ filterOptions.value }
            onChange={ handleChange }
          />
          <button
            type="button"
            data-testid="button-filter"
            onClick={ handleClick }
          >
            Filtrar
          </button>
        </div>
      </form>
    </header>
  );
}
export default Header;
