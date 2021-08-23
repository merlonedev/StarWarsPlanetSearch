import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

function Provider(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { children } = props;
  const generalStore = { data, loading, setData, setLoading };

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
