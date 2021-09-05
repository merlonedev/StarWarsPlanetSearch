import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { PayloadContext } from '..';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

function PayloadProvider({ children }) {
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
    <PayloadContext.Provider value={ contextValue }>
      {children}
    </PayloadContext.Provider>
  );
}

PayloadProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PayloadProvider;
