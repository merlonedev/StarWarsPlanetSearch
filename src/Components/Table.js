import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';
import Input from './Input';
import NumericFilter from './NumericFilter';
import Filter2 from './Filter2';

function Table() {
  const context = useContext(MyContext);
  const { data, newFilter, filter2 } = context;
  if (!data.length) return <p>Loading...</p>;
  const header = Object.keys(data[0]).filter((resultLine) => resultLine !== 'residents');
  return (
    <>
      <Input />
      {filter2 && <Filter2 />}
      <NumericFilter />
      <table>
        <thead>
          <tr>
            {header.map((th) => <th key={ th }>{th}</th>)}
          </tr>
        </thead>
        <tbody>
          {newFilter.map((linha, index) => (
            <tr key={ index }>
              {
                header.map((key, i) => <td key={ i }>{linha[key]}</td>)
              }
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
