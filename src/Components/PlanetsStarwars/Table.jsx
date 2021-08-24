import React, { useContext } from 'react';
import ContextGlobal from '../ContextGlobal';
import FilterPlanets from './FilterPlanets';

const Table = () => {
  const { results } = useContext(ContextGlobal);
  const [options, setOptions] = React.useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  const [filterNewPlanet, setFilterNewPlanet] = React.useState({
    column: '',
    comparison: '',
    value: '',
  });
  const [planetFilter, setplanetFilter] = React.useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
    ],
  });

  const handleFilterByName = ({ target }) => {
    setplanetFilter({ ...planetFilter, filterByName: { name: target.value } });
  };

  function handlefilterByNumericValues({ target }) {
    const { name, value } = target;
    setFilterNewPlanet({ ...filterNewPlanet, [name]: value });
  }

  const handleFilterButton = () => {
    setplanetFilter({ ...planetFilter,
      filterByNumericValues: [...planetFilter.filterByNumericValues, filterNewPlanet] });
    setOptions(options.filter((option) => option !== filterNewPlanet.column));
  };

  const handleClick = (param) => {
    const newFilter = planetFilter.filterByNumericValues
      .filter((filter) => filter.column !== param);
    setplanetFilter({ ...planetFilter, filterByNumericValues: newFilter });
    setOptions([...options, param]);
  };

  if (!results) return <div>Loading...</div>;
  const { name } = planetFilter;
  return (
    <div>
      <input
        type="text"
        value={ name }
        onChange={ handleFilterByName }
        data-testid="name-filter"
      />
      <form>
        <select
          name="column"
          data-testid="column-filter"
          onChange={ handlefilterByNumericValues }
        >
          {options.map((option) => <option key={ option }>{option}</option>)}
        </select>
        <select
          name="comparison"
          data-testid="comparison-filter"
          onChange={ handlefilterByNumericValues }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input
          name="value"
          type="number"
          data-testid="value-filter"
          onChange={ handlefilterByNumericValues }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleFilterButton }
        >
          Add Filter
        </button>
      </form>
      { planetFilter.filterByNumericValues && planetFilter.filterByNumericValues
        .map((filter, index) => (
          <div key={ index } data-testid="filter">
            <p>{filter.column}</p>
            <button type="button" onClick={ () => handleClick(filter.column) }>X</button>
          </div>))}
      <table>
        <thead>
          <tr>
            {Object
              .keys(results[0])
              .filter((content) => content !== 'residents')
              .map((header, index) => <th key={ index }>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {FilterPlanets(results, planetFilter)
            .map((planet, index) => (
              <tr key={ index }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
