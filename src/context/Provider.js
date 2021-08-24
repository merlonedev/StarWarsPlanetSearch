import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import appContext from './appContext';
import planetApi from '../services/planetsApi';

function Provider({ children }) {
  const columns = ['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];

  const [data, setData] = useState([]);
  const [inputName, setInputName] = useState({ name: '' });
  const [filteredInfo, setFilteredInfo] = useState([]);
  const [filteredColumns, setFilteredColumns] = useState(columns);
  const [selectedInfo, setSelectedInfo] = useState([]);

  useEffect(() => {
    const getPlanetApi = async () => {
      const apiItens = await planetApi();
      setData(apiItens);
    };
    getPlanetApi();
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

  const handleClickFilter = (selectedInfoObj) => {
    const info = [...selectedInfo, selectedInfoObj];
    setSelectedInfo(info);
    const mapInfo = info.map((objFiltered) => objFiltered.selectedColumn);
    const mapColumns = columns.filter((column) => !mapInfo.includes(column));
    setFilteredColumns(mapColumns);
    console.log(mapColumns);
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

  /* selectedInfo.forEach((obj) => filterNumberValue(obj)); */

  const contextValue = {
    data,
    filterPlanetsName,
    filteredInfo,
    filteredColumns,
    handleClickFilter,
    filterNumberValue,
    setFilteredColumns };

  return (
    <appContext.Provider value={ contextValue }>
      {children}
    </appContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
