import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

const INITIAL_STATE = {
  data: [],
  loading: true,
  filterByName: '',
  numericFilter: {
    column: '',
    comparison: '',
    value: '' },
};

function Provider(props) {
  const [globalState, setGlobalState] = useState(INITIAL_STATE);
  const { children } = props;
  const generalStore = { globalState, setGlobalState };

  return (
    <Context.Provider value={ generalStore }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
