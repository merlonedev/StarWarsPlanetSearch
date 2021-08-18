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
    if (results !== 'residents') {
      const result = Object.values(results);
      return (
        <tr key={ index }>
          { result.map((planetEntrie) => <td key={ planetEntrie }>{ planetEntrie }</td>)}
        </tr>
      );
    }
    return null;
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
