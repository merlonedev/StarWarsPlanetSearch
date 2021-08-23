import React, { useState, useEffect } from 'react';
import './Planets.css';

function Planets() {
  const [state, setState] = useState({
    planets: [],
    filters: {
      filterPlanetsName: [],
      filterByName: {
        name: '',
      },
    },
  });
  const tableHeard = ['Name', 'Created', 'Diameter', 'Edited',
    'Films', 'Gravity', 'Orbital Period', 'Population',
    'Rotation Period', 'Surface Water', 'Terrain', 'Climate', 'URL'];
  const { filters: { filterByName }, planets } = state;

  useEffect(() => {
    const getPlanets = async () => {
      const api = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const planetsResults = await fetch(api).then((data) => data.json());
      setState({ ...state, planets: [...planetsResults.results] });
    };
    getPlanets();
  }, []);

  console.log(state);

  const handleFilterName = ({ target: { value } }) => {
    setState({
      ...state,
      filters: {
        filterByName: {
          name: value,
        },
      },
    });
  };

  return (
    <main>
      <form>
        <label htmlFor="filterName">
          <input
            type="text"
            id="filterName"
            name="filterName"
            onChange={ handleFilterName }
            data-testid="name-filter"
          />
          <span>Source</span>
        </label>
      </form>
      <table className="tablePlanets">
        <thead>
          <tr>
            {
              tableHeard.map((item) => (
                <th key={ item }>{item}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            planets.filter((item) => item.name.toLowerCase()
              .includes(filterByName.name.toLowerCase()))
              .map((item) => (
                <tr key={ item.name }>
                  <td>{item.name}</td>
                  <td>{item.created}</td>
                  <td>{item.diameter}</td>
                  <td>{item.edited}</td>
                  <td>{item.films}</td>
                  <td>{item.gravity}</td>
                  <td>{item.orbital_period}</td>
                  <td>{item.population}</td>
                  <td>{item.rotation_period}</td>
                  <td>{item.surface_water}</td>
                  <td>{item.terrain}</td>
                  <td>{item.climate}</td>
                  <td>{item.url}</td>
                </tr>
              ))
          }
        </tbody>
      </table>
    </main>
  );
}

export default Planets;
