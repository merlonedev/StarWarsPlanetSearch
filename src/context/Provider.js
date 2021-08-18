import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import StarContext from './StarContext';

const initialFilterState = {
  filterByName: '',
  filterByNumericValues: ({
    column: '',
    comparation: '',
    value: undefined,
  }),
}

function Provider({ children }) {
  const [data, setData] = useState({ results: [] });
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filter, setFilter] = useState(initialFilterState);

  useEffect(() => {
    const fetchData = async () => {
      const dataList = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((r) => r.json());
      setData(dataList);
      setFilteredPlanets(dataList.results);
    };
    fetchData();
  }, []);

  const filterPlanetsByName = ({ target }) => {
    const { value } = target;
    const filteredNames = data.results.filter((e) => e.name.includes(value));
    setFilteredPlanets(filteredNames);
  };

  // const filterPlanets = (filterStats) => {
  //   const { name, column, comparation, value } = filterStats;
  //   const filteredNames = data.results.filter((e) => e.name.includes(name));
  //   setFilteredPlanets(filteredNames);
  //   if(value) {
  //     const filteredValues = filteredPlanets
  //   }
  // }

  const context = {
    data,
    filterName: filterPlanetsByName,
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
