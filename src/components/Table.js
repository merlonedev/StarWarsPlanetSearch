import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Table = () => {
  const { data, filters } = useContext(AppContext);

  // const [currentPlanets, setCurrentPlanets] = useState();

  const renderTableHeader = () => {
    const result = Object.keys(data[0]).map((title) => {
      if (title !== 'residents') {
        return (
          <th key={ title }>{ title }</th>
        );
      }
      return null;
    });
    return result;
  };

  const renderPlanets = (planets) => {
    const result = planets.map((planet, index) => (
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
        <td>{ planet.films }</td>
        <td>{ planet.created }</td>
        <td>{ planet.edited }</td>
        <td>{ planet.url }</td>
      </tr>
    ));
    return result;
  };

  if (data !== undefined) {
    if (filters.filterByName.name !== '') {
      const filteredPlanets = data.filter((planet) => (
        planet.name.includes(filters.filterByName.name)
      ));
      return (
        <table>
          <thead>
            <tr>
              { renderTableHeader() }
            </tr>
          </thead>
          <tbody>
            { renderPlanets(filteredPlanets) }
          </tbody>
        </table>
      );
    }

    if (filters.filterByNumericValues.length > 0) {
      const lastFilterLength = filters.filterByNumericValues.length - 1;
      const lastFilter = filters.filterByNumericValues[lastFilterLength];
      const { column, comparison, value } = lastFilter;
      let filteredPlanets;
      if (comparison === 'maior que') {
        filteredPlanets = data.filter((planet) => (
          +planet[column] > +value
        ));
        console.log(filteredPlanets);
      } else if (comparison === 'menor que') {
        filteredPlanets = data.filter((planet) => (
          +planet[column] < +value
        ));
      } else {
        filteredPlanets = data.filter((planet) => (
          +planet[column] === +value
        ));
      }
      return (
        <table>
          <thead>
            <tr>
              { renderTableHeader() }
            </tr>
          </thead>
          <tbody>
            { renderPlanets(filteredPlanets) }
          </tbody>
        </table>
      );
    }

    return (
      <table>
        <thead>
          <tr>
            { renderTableHeader() }
          </tr>
        </thead>
        <tbody>
          { renderPlanets(data) }
        </tbody>
      </table>
    );
  }
  return <span>Carregando...</span>;
};

export default Table;
