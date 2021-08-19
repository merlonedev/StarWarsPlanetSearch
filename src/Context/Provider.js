import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import Planets from '../Hooks/Planets';
import FilterName from '../Hooks/FilterName';

function Provider(props) {
  const [data, loading] = Planets();
  const [filter, setFilter] = FilterName();

  const [state, setState] = useState({});

  useEffect(() => {
    setState({
      data,
      filter,
      setFilter,
    });
  }, [data, filter, setFilter]);

  const handleSetState = (key, value) => {
    const newState = {
      ...state,
      [key]: value,
    };
    setState(newState);
  };

  const { children } = props;
  const contextValue = {
    state,
    setState,
    data,
    filter,
    setFilter,
    loading,
    handleSetState,
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
