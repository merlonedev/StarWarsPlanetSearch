import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import FetchApi from '../Helper/FetchApi';

const INITIAL_STATE = { filterByName: { name: '' },
  filterByNumericValues: [
    {
      column: '',
      comparison: '',
      value: '',
    },
  ],
};

const COLUMN = ['population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water'];

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState('');
  const [filter, setFilter] = useState(INITIAL_STATE);
  const [newData, setNewData] = useState('');
  const [columnArray, setColumn] = useState(COLUMN);

  const getAPI = async () => {
    const request = await FetchApi();
    const newArray = Object.values(request.results).map((item) => {
      delete item.residents;
      return item;
    });
    setData(newArray);
  };

  useEffect(() => {
    getAPI();
  }, []);

  useEffect(() => {
    if (data && filter) {
      setNewData(data.filter((item) => item.name.toLowerCase()
        .includes(filter.filterByName.name.toLowerCase())));
    } else {
      setNewData(data);
    }
  }, [data, filter]);

  useEffect(() => {
    filter.filterByNumericValues.forEach((element) => {
      const { column, comparison, value } = element;
      switch (comparison) {
      case 'maior que':
        setNewData(data
          .filter((item) => Number(item[column]) > value && item[column] !== 'unknown'));
        break;
      case 'igual a':
        setNewData(data
          .filter((item) => item[column] === value && item[column] !== 'unknown'));
        break;
      case 'menor que':
        setNewData(data
          .filter((item) => Number(item[column]) < value && item[column] !== 'unknown'));
        break;
      default: setNewData(data);
      }
    });
  }, [data, filter.filterByNumericValues]);

  const handleChange = (event) => {
    if (event.target) {
      const { name, value } = event.target;
      setFilter({ ...filter, filterByName: { [name]: value } });
    } else if (filter.filterByNumericValues[0].column === '') {
      setFilter({ ...filter,
        filterByNumericValues: [event] });
      setColumn(columnArray.filter((item) => item !== event.column));
    } else {
      setFilter({ ...filter,
        filterByNumericValues: [...filter.filterByNumericValues, event] });
      setColumn(columnArray.filter((item) => item !== event.column));
    }
  };

  const removeFilter = (coluna) => {
    const { filterByNumericValues } = filter;
    const remove = filterByNumericValues.filter(
      (item) => item.column !== coluna,
    );
    setColumn(COLUMN);
    setFilter({ ...filter, filterByNumericValues: [remove] });
  };

  return (
    <Context.Provider
      value={ {
        data,
        setData,
        filter,
        handleChange,
        newData,
        columnArray,
        removeFilter,
      } }
    >
      {children}
    </Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
