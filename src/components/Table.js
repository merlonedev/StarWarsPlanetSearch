import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Table() {
  const {
    state,
    filters,
    filteredPlanets,
    setFilters,
    setFilteredPlanets,
  } = useContext(MyContext);

  function handleChange({ target }) {
    const { value } = target;
    const nameSearch = state.filter((search) => search.name.includes(value));
    setFilters({ ...filters, filterByName: { value } });
    setFilteredPlanets(nameSearch);
  }

  function inputSearch() {
    return filteredPlanets.map((eachPlanet, index) => (
      <tr key={ index }>
        {Object.values(eachPlanet).map((info) => (
          <td key={ info.name }>
            {info}
          </td>
        ))}
      </tr>
    ));
  }

  return (

    <div>
      <label htmlFor="search">
        Procurar
        <input
          type="text"
          id="search"
          data-testid="name-filter"
          onChange={ handleChange }
        />
      </label>
      <table>
        <thead>
          <tr>
            {state.length > 0 && Object.keys(state[0]).map((column, index) => (
              column !== 'residents' ? <th key={ index }>{ column }</th> : null
            ))}
          </tr>
        </thead>
        <tbody>
          { inputSearch() }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
