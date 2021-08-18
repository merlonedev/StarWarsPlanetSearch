import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import StarContext from './StarContext';

function Provider({ children }) {
  const [data, setData] = useState({ results: [] });
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dataList = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((r) => r.json());
      setData(dataList);
      setFilteredPlanets(dataList.results);
    };
    fetchData();
  }, []);

  const filterDataResult = ({ target }) => {
    const { value } = target;
    const filteredNames = data.results.filter((e) => e.name.includes(value));
    setFilteredPlanets(filteredNames);
  };

  const context = {
    data,
    filterName: filterDataResult,
    filteredPlanets,
  };

  return (
    <StarContext.Provider value={ context }>
      {children}
    </StarContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
