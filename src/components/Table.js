import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Table = () => {
  const { data } = useContext(StarWarsContext);
  if (!data.length) return <p>LOADING...</p>;

  const header = Object.keys(data[0]).filter((key) => key !== 'residents');

  return (
    <table>
      <thead>
        <tr>
          {header.map((head) => <th key={ head }>{head}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((info) => (
          <tr key={ info.name }>
            {header.map((head) => <td key={ info[head] }>{ info[head] }</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
