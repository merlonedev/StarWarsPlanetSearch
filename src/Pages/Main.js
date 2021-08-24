import React, { useContext } from 'react';
import Filter from '../Components/Filter';
import MyContext from '../Components/MyContext';
import Table from '../Components/Table';

function Main() {
  const { loading } = useContext(MyContext);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <Filter />
      <Table />
    </div>
  );
}

export default Main;
