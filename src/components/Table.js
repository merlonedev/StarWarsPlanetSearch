import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data, nameSearch } = useContext(PlanetsContext);
  if (!data.length) return <h1>Loading</h1>;
  const planets = data.filter((planet) => planet.name.includes(nameSearch));

  /* const dataFiltered = Object.keys(data[0]0.filter((key) => key !== 'residents');
  const planets = data.filter((planet) => planet.name.includes(nameSearch));
  let planetsFil = [];
  console.log(param); */

  /* if (comparison === 'maior que') {
    planetsFil = data.filter((planet) => parseInt(planet.diameter, 10) > numberSearch);
  }
  if (comparison === 'menor que') {
    planetsFil = data
      .filter((planet) => parseInt(planet.surface_water, 10) < numberSearch);
  }
  if (comparison === 'igual a') {
    planetsFil = data
      .filter((planet) => parseFloat(planet.population) === parseFloat(numberSearch));
    // console.log(typeof numberSearch);
    // data.filter((planet) => console.log(typeof parseFloat(planet.population)));
  }
  // nameSearch !== '' ? ala = planets : ala = planetsFil;
  let ala = '';
  if (!nameSearch.length) {
    ala = planetsFil;
  } else {
    ala = planets;
  } */
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          { Object.keys(data[0]).map((key) => <th key={ key } scope="col">{ key }</th>) }
        </tr>
      </thead>
      <tbody>
        { planets.map((planet) => (
          <tr key={ planet }>
            {Object.values(planet).map((value) => <td key={ value }>{ value }</td>)}
          </tr>))}
      </tbody>
    </table>
  );
}

export default Table;
