import React, { useContext } from 'react';
import Loading from './Loading';
import Table from './Table';
import Context from '../context/context';

function Main() {
  const { loading } = useContext(Context);
  return (
    <div>
      { loading ? <Loading /> : <Table />}
    </div>
  );
}

export default Main;
