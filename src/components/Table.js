import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data, nameSearch } = useContext(PlanetsContext);
  if (!data.length) return <h1>Loading</h1>;
  const dataFiltered = Object.keys(data[0]).filter((key) => key !== 'residents');
  const planets = data.filter((planet) => planet.name.includes(nameSearch));
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          { dataFiltered.map((key) => <th key={ key } scope="col">{ key }</th>) }
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
