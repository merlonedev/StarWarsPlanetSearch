import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [data, setPlanetData] = useState();
  const [nameFilter, setNameFilter] = useState({ });

  return (
    <AppContext.Provider value={ { data, setPlanetData, nameFilter, setNameFilter } }>
      {children}
    </AppContext.Provider>
  );
}
AppProvider.propTypes = {
  children: PropTypes.objectOf(Object).isRequired,
};

export default AppProvider;
