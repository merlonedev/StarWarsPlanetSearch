// vitals
import React, { useContext, useEffect } from 'react';
// context
import myContext from '../context/myContext';
import fetchAPI from '../helper/fetchAPI';
// components
import Form from '../components/Form';
import Table from '../components/Table';
// styles
import '../styles/Table.css';

function MainPage() {
  const { setData } = useContext(myContext);

  useEffect(() => {
    fetchAPI(setData);
  }, [setData]);

  return (
    <>
      <Form />
      <Table />
    </>
  );
}

export default MainPage;
