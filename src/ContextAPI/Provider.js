import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextApp from './ContextApp';
import fetchAPI from '../FetchAPI/FetchAPI';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [inputName, setInputName] = useState({ name: '' });
  const [filteredName, setFilteredName] = useState([]);

  useEffect(() => {
    const getfetchAPI = async () => {
      const itensURL = await fetchAPI();
      setData(itensURL);
    };
    getfetchAPI();
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
    <ContextApp.Provider value={ contextValue }>
      {children}
    </ContextApp.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
