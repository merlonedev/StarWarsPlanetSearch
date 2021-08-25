import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Table = () => {
  const { data, filters } = useContext(StarWarsContext);
  const { filterByName } = filters;

  if (!data.length) return <p>LOADING...</p>;

  const header = Object.keys(data[0]).filter((key) => key !== 'residents');
  const filterByPlanet = data.filter((planet) => planet.name.includes(filterByName.name));

  return (
    <table>
      <thead>
        <tr>
          {header.map((head) => <th key={ head }>{head}</th>)}
        </tr>
      </thead>
      <tbody>
        {filterByPlanet.map((info) => (
          <tr key={ info.name }>
            {header.map((head) => <td key={ info[head] }>{ info[head] }</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
