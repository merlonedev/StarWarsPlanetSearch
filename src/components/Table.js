import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data, nameSearch, numberSearch, comparison } = useContext(PlanetsContext);
  if (!data.length) return <h1>Loading</h1>;
  let planets = data.filter((planet) => planet.name.includes(nameSearch));
  // let planetsFil = [];

  if (comparison === 'maior que') {
    planets = planets
      .filter((planet) => parseInt(planet.diameter, 10) > numberSearch);
  }
  if (comparison === 'menor que') {
    planets = planets
      .filter((planet) => parseInt(planet.surface_water, 10) < numberSearch);
  }
  if (comparison === 'igual a') {
    planets = planets
      .filter((planet) => parseFloat(planet.population) === parseFloat(numberSearch));
    // console.log(typeof numberSearch);
    // data.filter((planet) => console.log(typeof parseFloat(planet.population)));
  }
  // nameSearch !== '' ? ala = planets : ala = planets;
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
