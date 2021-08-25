import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import mycontext from './mycontext';

function Provider({ children }) {
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState({ filters: { filterByName: { name: '' } } });
  const [filter, setfilter] = useState([]);

  useEffect(() => {
    const getAPI = async () => {
      try {
        const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
        const { results } = await response.json(); // const objeto = await results.results;
        setdata(results);
        setfilter(results);
      } catch (error) {
        console.log(error);
      }
    };
    getAPI();
  }, []);

  function searchPlanet({ target: { value } }) { // searchPlanet(e) { const valor = e.target.value }
    setsearch({
      ...search,
      filterByName: { name: value },
    });
  }

  function filterSearch({ target: { value } }) {
    const dataFiltered = data.filter((planet) => (
      planet.name.toLowerCase().includes(value.toLowerCase())
    ));
    setfilter(dataFiltered);
  }

  const context = { data, setdata, search, searchPlanet, filter, filterSearch };
  return (
    <mycontext.Provider value={ context }>
      { children }
    </mycontext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.object,
}.isrequired;

export default Provider;
