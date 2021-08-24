import React from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from './StarwarsContext';

function Provider(props) {
  const { children } = props;
  const contextValue = {};

  return (
    <StarwarsContext.Provider value={ contextValue }>
      { children }
    </StarwarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
export default Provider;
