import React from 'react';
import Lines from '../components/Lines';
import MyContext from '../context/context';

export default function Table() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>climate</th>
            <th>created</th>
            <th>diameter</th>
            <th>edited</th>
            <th>films</th>
            <th>gravity</th>
            <th>orbital period</th>
            <th>population</th>
            <th>rotarion period</th>
            <th>surface water</th>
            <th>terrain</th>
            <th>url</th>
          </tr>
        </thead>
        <br />
        <tbody>
          <MyContext.Consumer>
            { (value) => (value
              ? value.map((result, index) => <Lines key={ index } Result={ result } />)
              : <h1>Loading</h1>)}
          </MyContext.Consumer>
        </tbody>
      </table>
    </div>
  );
}
