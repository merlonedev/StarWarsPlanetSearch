import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const MyContext = createContext();

export const MyContextInput = () => useContext(MyContext);

export default function MyProvider({ children }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [{ column: '', comparison: '', value: '' }],
  })

  const handleFilter = ({ target }) => {
    const { name } = target;
    setFilter({ [name]: target.value });
  }

  const value = {
    data,
    setData,
    filter,
    handleFilter,
  };
  return (
    <MyContext.Provider value={ value }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
