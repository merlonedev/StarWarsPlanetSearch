import React, { useContext } from 'react';
import Context from '../../context/Context';

export default function Table() {
  const { data } = useContext(Context);
  if (!data.length) return <p>loading</p>;
  const ths = Object.keys(data[0]).filter((item) => item !== 'residents');
  return (
    <table>
      <thead>
        <tr>
          {ths.map((th) => <th key={ th }>{th}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={ index }>
            {
              ths.map((key, i) => <td key={ i }>{item[key]}</td>)
            }
          </tr>
        ))}
      </tbody>
    </table>
  );
}
