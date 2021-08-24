import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import appContext from './appContext';
import planetApi from '../services/planetsApi';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [inputName, setInputName] = useState({ name: '' });
  const [filteredName, setFilteredName] = useState([]);

  useEffect(() => {
    const getPlanetApi = async () => {
      const apiItens = await planetApi();
      setData(apiItens);
    };
    getPlanetApi();
  }, []);

  const filterPlanetsName = ({ target: { value } }) => {
    setInputName({
      ...inputName,
      name: value,
    });
  };

  useEffect(() => {
    const dataFilter = data.filter((planet) => (planet.name
      .toLowerCase()
      .includes(inputName.name.toLowerCase())));
    setFilteredName(dataFilter);
  }, [data, inputName]);

  const contextValue = { data, filterPlanetsName, filteredName };

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
