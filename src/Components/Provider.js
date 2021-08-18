import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import Context from '../context';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAPI = () => {
      fetch(URL)
        .then((response) => response.json())
        .then((json) => setData(json.results))
        .catch((error) => console.log(error));
    };
    fetchAPI();
  }, []);

  const contextValue = {
    data,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
