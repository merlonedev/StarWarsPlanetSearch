import React, { useContext } from 'react';
import { Context } from '../context/SWProvider';
import Table from '../Components/Table';

const Home = () => {
  const { data } = useContext(Context);

  return (
    <div>
      {' '}
      <Table data={ data } />
    </div>

  );
};

export default Home;
