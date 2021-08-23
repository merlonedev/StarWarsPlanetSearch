import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data, nameSearch, numberSearch, comparison,
    param } = useContext(PlanetsContext);
  if (!data.length) return <h1>Loading</h1>;
  let planets = data;
  // let planetsFil = [];
  if (nameSearch !== '') {
    planets = data.filter((planet) => planet.name.includes(nameSearch));
  }

  if (comparison === 'maior que') {
    planets = planets
      .filter((planet) => parseInt(planet[param], 10) > numberSearch);
  }
  if (comparison === 'menor que') {
    planets = planets
      .filter((planet) => parseInt(planet[param], 10) < numberSearch);
  }
  if (comparison === 'igual a') {
    planets = planets
      .filter((planet) => parseFloat(planet[param]) === parseFloat(numberSearch));
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
