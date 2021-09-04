import React from 'react';
import MyContext from '../context/context';

export default function Table() {
  return (
    <div>
      <MyContext.Consumer>
        { (value) => (value
          ? value.map((result) => console.log(result))
          : <h1>Loading</h1>)}
      </MyContext.Consumer>
    </div>
  );
}
