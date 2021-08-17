import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function Table() {
  const { data } = useContext(AppContext);
  const keys = Object.keys(data[0]).filter((name) => name !== 'residents');

  return (
    <div className="table-responsive-sm">
      <table className="table table-sm">
        <thead>
          <tr className="table-info">
            {keys.map((item, index) => <th key={ index }>{item}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((planet) => (
            <tr key={ planet.name }>
              {
                keys.map((key) => (
                  <td key={ Math.random() }>{planet[key]}</td>
                ))
              }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
