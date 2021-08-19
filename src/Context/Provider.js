import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import Planets from '../Hooks/Planets';
import Filter from '../Hooks/Filter';
import ColumnOptions from '../Hooks/ColumnOptions';

function Provider(props) {
  const [data, loading] = Planets();
  const [filter, setFilter] = Filter();
  const [columnOptions, setColumnOptions] = ColumnOptions();

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
    columnOptions,
    setColumnOptions,
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
