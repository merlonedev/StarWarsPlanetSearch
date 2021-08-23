import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [nameSearch, setNameSearch] = useState('');
  const [numberSearch, setNumberSearch] = useState('');
  const [comparison, setComparison] = useState('');
  const [param, setParam] = useState('');

  useEffect(() => {
    const fetchAPI = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const a = await fetch(endpoint).then((dados) => dados.json());
      const planets = a.results.filter((plan) => Object.keys(plan) !== 'residents');
      setData(planets);
    };
    fetchAPI();
  }, []);

  const context = {
    data,
    setData,
    nameSearch,
    setNameSearch,
    numberSearch,
    setNumberSearch,
    comparison,
    setComparison,
    param,
    setParam,
  };
  return (
    <PlanetsContext.Provider value={ context }>
      { children }
      {/* console.log(data) }
      { console.log(nameSearch) }
      { console.log(numberSearch) }
      { console.log(comparison) }
      { console.log(param) */}
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
