import React, { useContext } from 'react';
import MyContext from '../Context/Context';

function Table() {
  const { data } = useContext(MyContext);
  const head = Object.keys(data[0]);
  const header = head.map((tagHead, index) => {
    if (tagHead !== 'residents') {
      return <th key={ index }>{ tagHead }</th>;
    }
    return null;
  });

  const body = data.map((results, index) => {
    const result = Object.entries(results);
    return (
      <tr key={ index }>
        { result.map((planetEntry) => {
          if (planetEntry[0] !== 'residents') {
            return (
              <td key={ planetEntry[1] }>{ planetEntry[1] }</td>
            );
          }
          return null;
        })}
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          { header }
        </tr>
      </thead>
      <tbody>
        { body }
      </tbody>
    </table>
  );
}

export default Table;
