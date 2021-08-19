import React, { useContext } from 'react';
import Context from '../Context/Context';
import Table from '../Components/Table';
import FilterNameForm from '../Components/FilterNameForm';
import FilterNumbersForm from '../Components/FilterNumbersForm';

function Home() {
  const { loading } = useContext(Context);

  return loading
    ? <div>Loading...</div>
    : (
      <main>
        <FilterNameForm />
        <FilterNumbersForm />
        <Table />
      </main>
    );
}

export default Home;
