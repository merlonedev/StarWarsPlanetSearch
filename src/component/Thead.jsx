import React from 'react';
import Request from '../hooks/FetchAPI';

const Thead = () => {
  const [data] = Request();
  if (data.length) {
    const itensTrashTableHead = Object.keys(data[0]);
    const itensTableHead = itensTrashTableHead.filter((item) => item !== 'residents');
    return (
      <tr>
        { itensTableHead
          .map((itemTableHead, index) => <th key={ index }>{ itemTableHead }</th>) }
      </tr>
    );
  }
  return <p> </p>;
};

export default Thead;
