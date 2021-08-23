import React, { useContext } from 'react';
import MyContext from '../context/myContext';

const Thead = () => {
  const { data } = useContext(MyContext);
  if (data.length) {
    const itensTableHead = Object.keys(data[0]);
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
