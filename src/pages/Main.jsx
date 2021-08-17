import React from 'react';
import Provider from '../context/Provider';
import Table from '../components/Table';

export default function Main() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}
