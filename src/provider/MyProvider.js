import React from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';

function MyProvider({ children }) {
  return (
    <MyContext.Provider value={ {} }>
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
