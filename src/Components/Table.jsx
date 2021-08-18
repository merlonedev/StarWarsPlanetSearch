import React from 'react';
import StarWarsContext from '../context/context';

function Table() {
  // const [planets, setPlanets] = useState([]);

  // useEffect(() => {
  //   const getPlanets = async () => {
  //     const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  //     const result = await fetch(endpoint).then((response) => response.json());
  //     setPlanets(result.results);
  //   };
  //   getPlanets();
  // }, []);

  const renderTableHeader = () => (
    <thead>
      <tr>
        <th>Name</th>
        <th>Rotation Period</th>
        <th>Orbital Period</th>
        <th>Diameter</th>
        <th>Climate</th>
        <th>Gravity</th>
        <th>Terrain</th>
        <th>Surface Water</th>
        <th>Population</th>
        <th>Films</th>
        <th>Created</th>
        <th>Edited</th>
        <th>URL</th>
      </tr>
    </thead>
  );

  const renderTableBody = () => (
    <tbody>
      <StarWarsContext.Consumer>
        { (value) => value.map((planet, index) => (
          <tr key={ index }>
            <td>{ planet.name }</td>
            <td>{ planet.rotation_period }</td>
            <td>{ planet.orbital_period }</td>
            <td>{ planet.diameter }</td>
            <td>{ planet.climate }</td>
            <td>{ planet.gravity }</td>
            <td>{ planet.terrain }</td>
            <td>{ planet.surface_water }</td>
            <td>{ planet.population }</td>
            <td>
              <ol>
                { planet.films.map(
                  (film, fIndex) => (
                    <li key={ fIndex }>
                      <a href={ film }>{ `Appearance ${fIndex + 1}` }</a>
                    </li>),
                ) }
              </ol>
            </td>
            <td>{ planet.created }</td>
            <td>{ planet.edited }</td>
            <td><a href={ planet.url }>{ `${planet.name} Description` }</a></td>
          </tr>
        )) }
      </StarWarsContext.Consumer>
    </tbody>
  );

  return (
    <div>
      <table>
        { renderTableHeader() }
        { renderTableBody() }
      </table>
    </div>
  );
}

export default Table;
