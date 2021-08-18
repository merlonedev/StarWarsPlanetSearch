import React, { useContext } from 'react';
import myContext from '../context/myContext';

function Table() {
  const { planets } = useContext(myContext);
  return (
    <p>header</p>
  );
}

export default Table;
