import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';

function Table() {
  const context = useContext(MyContext);
  const { data } = context;
  if (!data.length) return <p>Loading...</p>;
  const header = Object.keys(data[0]).filter((resultLine) => resultLine !== 'residents');
  return (
    <table>
      <thead>
        <tr>
          {header.map((th) => <th key={ th }>{th}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((linha, index) => (
          <tr key={ index }>
            {
              header.map((key, i) => <td key={ i }>{linha[key]}</td>)
            }
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
