import React, { useContext } from 'react';
import { Context } from '../context/Context';

export default function Table() {
  const { planets, setPlanets } = useContext(Context);
  const { filters, setFilters } = useContext(Context);
  const { filterNumber, setFilterNumber } = useContext(Context);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFilterNumber({
      ...filterNumber,
      [name]: value,
    });
  };

  const AddFilter = () => {
    const { colunm, comparison, value } = filterNumber;
    const retorno = planets.filter((item) => {
      switch (comparison) {
      case 'maior que':
        return parseInt(item[colunm], 10) > parseInt(value, 10);
      case 'menor que':
        return parseInt(item[colunm], 10) < parseInt(value, 10);
      case 'igual a':
        return parseInt(item[colunm], 10) === parseInt(value, 10);
      default:
        return 0;
      }
    });
    setPlanets(retorno);
    console.log(retorno);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={ (e) => setFilters({ name: e.target.value }) }
          data-testid="name-filter"
        />
      </div>
      <select name="column" onChange={ handleChange } data-testid="column-filter">
        <option value="rotation_period">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="surface_water">surface_water</option>
        <option value="population">rotation_period</option>
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ handleChange }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igua a</option>
      </select>
      <input
        name="value"
        type="number"
        onChange={ handleChange }
        data-testid="value-filter"
      />
      <button onClick={ AddFilter } type="button">
        add Filtro
      </button>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>surface_water</th>
            <th>rotation_period</th>
            <th>orbital_period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>films</th>
            <th>created</th>
            <th>edited</th>
            <th>population</th>
            <th>url</th>
          </tr>
        </thead>
        {planets
          .filter(({ name }) => name.toLowerCase().includes(filters.name.toLowerCase()))
          .map((planet) => (
            <tbody key="planet.name">
              <tr>
                <td>{planet.name}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.terrain}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.population}</td>
                <td>{planet.url}</td>
              </tr>
              {console.log(filters)}
            </tbody>
          ))}
      </table>
    </div>
  );
}
