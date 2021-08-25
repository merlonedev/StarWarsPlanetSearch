import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextApp from './ContextApp';
import fetchAPI from '../FetchAPI/FetchAPI';

function Provider({ children }) {
  const columns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const [data, setData] = useState([]);
  const [inputName, setInputName] = useState({ name: '' });
  const [filteredInfo, setFilteredInfo] = useState([]);
  const [filteredColumns, setFilteredColumns] = useState(columns);
  const [selectedInfo, setSelectedInfo] = useState([]);

  useEffect(() => {
    const getfetchAPI = async () => {
      const itensURL = await fetchAPI();
      setData(itensURL);
    };
    getfetchAPI();
  }, []);

  useEffect(() => {
    const dataFilter = data.filter((planet) => (planet.name
      .toLowerCase()
      .includes(inputName.name.toLowerCase())));
    setFilteredInfo(dataFilter);
  }, [data, inputName]);

  const filterPlanetsName = ({ target: { value } }) => {
    setInputName({
      ...inputName,
      name: value,
    });
  };

  const handleClickFilter = (selectedInfoObject) => {
    const info = [...selectedInfo, selectedInfoObject];
    setSelectedInfo(info);
  };

  const filterNumberValue = (selectedColumn, selectedComparison, selectedValue) => {
    if (selectedComparison === 'maior que') {
      const dataFilteredByValue = filteredInfo
        .filter((planet) => (+planet[selectedColumn] > +selectedValue));
      setFilteredInfo(dataFilteredByValue);
    }
    if (selectedComparison === 'menor que') {
      const dataFilteredByValue = filteredInfo
        .filter((planet) => (+planet[selectedColumn] < +selectedValue));
      setFilteredInfo(dataFilteredByValue);
    }
    if (selectedComparison === 'igual a') {
      const dataFilteredByValue = filteredInfo
        .filter((planet) => (+planet[selectedColumn] === +selectedValue));
      setFilteredInfo(dataFilteredByValue);
    }
  };

  const contextValue = {
    data,
    filterPlanetsName,
    filteredInfo,
    filteredColumns,
    handleClickFilter,
    filterNumberValue,
    setFilteredColumns,
  };

  return (
    <ContextApp.Provider value={ contextValue }>
      {children}
    </ContextApp.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
