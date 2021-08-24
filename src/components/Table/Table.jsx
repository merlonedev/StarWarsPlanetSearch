import React, { useContext } from 'react';
import Context from '../../context/Context';
import FilterByNumeric from './FilterByNumeric';
import FilterByText from './FilterByText';

export default function Table() {
  const { data, resultFilter } = useContext(Context);
  if (!data.length) return <p>loading</p>;
  const ths = Object.keys(data[0]).filter((item) => item !== 'residents');
  return (
    <div>
      <FilterByText />
      <FilterByNumeric />
      <table>
        <thead>
          <tr>
            {ths.map((th) => <th key={ th }>{th}</th>)}
          </tr>
        </thead>
        <tbody>
          {resultFilter.map((item, index) => (
            <tr key={ index }>
              {
                ths.map((key, i) => <td key={ i }>{item[key]}</td>)
              }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
