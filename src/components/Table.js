import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import headTable from '../headTable';
import './table.css';

const Table = () => {
  const { data } = useContext(StarWarsContext);

  return (
    <div>
      <table className="planets-table">
        <thead>
          <tr>
            {headTable.map((head, index) => <th key={ index }>{head}</th>)}
          </tr>
        </thead>
        <tbody>
          {Object.values(data)
            .map(({
              name,
              rotation_period: rotationPeriod,
              orbital_period: orbitalPeriod,
              diameter,
              climate,
              gravity,
              terrain,
              surface_water: surfaceWater,
              population,
              films,
              created,
              edited,
              url,
            }, index) => (
              <tr key={ index }>
                <td>{name}</td>
                <td>{ rotationPeriod }</td>
                <td>{ orbitalPeriod }</td>
                <td>{ diameter }</td>
                <td>{ climate }</td>
                <td>{ gravity }</td>
                <td>{ terrain }</td>
                <td>{ surfaceWater }</td>
                <td>{ population }</td>
                <td>{ films }</td>
                <td>{ created }</td>
                <td>{ edited }</td>
                <td>{ url }</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
