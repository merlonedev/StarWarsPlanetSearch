import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = async () => {
      try {
        const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
        const require = await fetch(URL);
        const { results } = await require.json();
        setState(results);
        setLoading(false);
      } catch (error) {
        return error;
      }
    };
    data();
  }, []);

  const contextValue = {
    state,
    setState,
    loading,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
