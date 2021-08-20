import React, { useContext } from 'react';
import { Context } from '../context/SWProvider';
import Table from '../Components/Table';
import Form from '../Components/Form';

const Home = () => {
  const { data } = useContext(Context);

  return (
    <div>
      <Form />
      {' '}
      <Table data={ data } />
    </div>

  );
};

export default Home;
