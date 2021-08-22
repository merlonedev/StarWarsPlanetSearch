import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function Provider(props) {
  const [data, setState] = useState([]);
  const [filters, setFilter] = useState(
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {
          column: '',
          comparison: '',
          value: '',
        },
      ],
    },
  );

  const handleSetName = (value) => {
    const newState = { ...filters,
      filterByName: {
        name: value,
      },
    };
    setFilter(newState);
  };

  const handleSetNumeric = (value) => {
    const newState = { ...filters,
      filterByNumericValues: [value],
    };
    setFilter(newState);
  };

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((result) => result.json());
      setState(results);
    };

    getPlanets();
  }, []);

  const { children } = props;
  const contextValue = { data,
    filters,
    setFilter,
    handleSetName,
    handleSetNumeric,
    setState };
  return (
    <PlanetsContext.Provider value={ contextValue }>
      {
        children
      }
    </PlanetsContext.Provider>
  );
}
Provider.propTypes = {
  children: PropTypes.shape.isRequired,
};
export default Provider;
