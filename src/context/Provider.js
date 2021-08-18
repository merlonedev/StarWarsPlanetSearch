import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import StarContext from './StarContext';

function Provider({ children }) {
  const [data, setData] = useState({ results: [] });

  useEffect(() => {
    const fetchData = async () => {
      const dataList = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((r) => r.json());
      setData(dataList);
    };
    fetchData();
  }, []);

  return (
    <StarContext.Provider value={ data }>
      {children}
    </StarContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
