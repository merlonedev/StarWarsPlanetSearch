import React, { useContext } from 'react';
import { context } from '../Context/Context';

function Table() {
  const { data } = useContext(context);
  console.log(data);
  return (
    <div>
      <p>hello</p>
    </div>
  );
}

export default Table;
