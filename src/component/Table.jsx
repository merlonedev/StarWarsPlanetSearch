import React, { useContext } from 'react';
import MyContext from '../context/myContext';
import Thead from './Thead';
import Tbody from './Tbody';

const Table = () => {
  const { data } = useContext(MyContext);
  if (data.length) {
    return (
      <table>
        <Thead />
        <Tbody />
      </table>
    );
  }
  return <p>Loading</p>;
};

export default Table;
