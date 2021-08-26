import React, { useState, useEffect } from 'react';
import MyContext from '../Context';
import Table from './Table';
import InputFilter from './InputFilter';

const filters = { filterByName: { name: '' } };

function Header() {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [stateName, setStateName] = useState(filters);
  const [filterContainer, setFilterContainer] = useState([]);

  const handleChange = ({ target }) => {
    setStateName({ ...stateName, filterByName: { name: target.value } });
  };

  useEffect(() => {
    const fetchAPIStar = async () => {
      const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(END_POINT);
      const result = await response.json();
      const headerFilter = Object.keys(result.results[0]);
      setHeaders(headerFilter.filter((el) => !el.includes('residents')));
      setData(result.results);
    };
    fetchAPIStar();
  }, []);

  useEffect(() => {
    const filterName = () => {
      const resultName = data.filter((planeta) => (
        planeta.name.toLowerCase().includes(stateName.filterByName.name.toLowerCase())));
      setFilterContainer(resultName);
    };
    filterName();
  }, [data, stateName]);

  const contextValue = {
    dataS: data,
    handle: handleChange,
    filterData: filterContainer,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      <InputFilter />
      <table>
        <thead>
          <tr>
            {
              headers.map((el) => <th key={ el }>{el}</th>)
            }
          </tr>
        </thead>
        <Table />
      </table>
    </MyContext.Provider>
  );
}

export default Header;
