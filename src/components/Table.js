import React, { useContext } from 'react';
import MyContext from '../context/Context';

export default function Table() {
  const value = useContext(MyContext);
  const { planetList } = value;
  let tableHeader = [];

  if (planetList.length > 0) {
    tableHeader = Object.keys(planetList[0]);
  }

  if (!planetList.length > 0) {
    return (<h1>Loading</h1>);
  }

  return (
    <table>
      <thead>
        <tr>
          { tableHeader.map((item) => <th key={ item }>{ item }</th>) }
        </tr>
      </thead>
      <tbody>
        { planetList.map((planets) => (
          <tr key={ planets.name }>
            { tableHeader.map((header) => <td key={ header }>{ planets[header] }</td>) }
          </tr>
        )) }
      </tbody>
    </table>

  );
}
