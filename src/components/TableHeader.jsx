import React, { useContext } from 'react';
import ContextApi from '../context/ContextApi';

function TableHeader() {
  const { data } = useContext(ContextApi);
  // const columnFilter = Object.keys(data[0]).filter((key) => key !== 'residents');

  return (
    <thead>
      <tr>
        {console.log(data)}
      </tr>
    </thead>
  );
}
// {data.map((item) => <th key={ item }>{ item }</th>)}
export default TableHeader;
