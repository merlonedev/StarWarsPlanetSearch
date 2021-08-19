import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data } = useContext(PlanetsContext);
  if (!data.length) return <h1>Loading</h1>;
  const dataFiltered = Object.keys(data[0]).filter((key) => key !== 'residents');
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          { dataFiltered.map((key) => <th key={ key } scope="col">{ key }</th>) }
        </tr>
      </thead>
      <tbody>
        { data.map((planet) => (
          <tr key={ planet }>
            {Object.values(planet).map((value) => <td key={ value }>{ value }</td>)}
          </tr>))}
      </tbody>
    </table>
  );
}

export default Table;
