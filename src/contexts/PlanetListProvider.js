import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetListContext from './PlanetListContext';
import { categoryOptions } from '../helpers/Options';

function Provider(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [{ column: '', comparison: '', value: '' }],
  });
  const [categories, setCategories] = useState(categoryOptions);

  const addData = (list) => {
    setData(list);
    setLoading(false);
  };

  const nameFilter = (name) => {
    const search = { ...filters,
      filterByName:
      { name },
    };
    setFilters(search);
  };

  const numericFilter = ({ column, comparison, value }) => {
    const filter = {
      ...filters,
    };
    filter.filterByNumericValues.push({ column, comparison, value });
    const newCategories = categoryOptions.filter((option) => option !== column);

    setCategories(newCategories);
    setFilters(filter);
  };
  const contextValue = {
    data,
    setData,
    loading,
    setLoading,
    filters,
    nameFilter,
    numericFilter,
    categories,
  };
  const { children } = props;

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      await fetch(endpoint)
        .then((response) => response.json())
        .then((info) => {
          const { results } = info;
          addData(results);
        })
        .catch((error) => console.log(error));
    };

    getPlanets();
  }, []);

  return (
    <PlanetListContext.Provider value={ contextValue }>
      { children }
    </PlanetListContext.Provider>
  );
}
const { element, arrayOf } = PropTypes;
Provider.propTypes = {
  children: arrayOf(element).isRequired,
};

export default Provider;
