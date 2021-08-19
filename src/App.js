import React from 'react';
import Table from './components/Table';
import Provider from './context/Provider';
import Input from './components/Input';
import SelectColumn from './components/SelectColumn';
import SelectComparison from './components/SelectComparison';
import InputValue from './components/InputValue';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <Provider>
      <Input testId="name-filter" name="name" />
      <SelectColumn testId="column-filter" name="column" />
      <SelectComparison testId="comparison-filter" name="comparison" />
      <InputValue testId="value-filter" name="value" type="number" />
      <Button testId="button-filter" />
      <Table />
    </Provider>
  );
}

export default App;
