import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import mycontext from './mycontext';

function Provider({ children }) {
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState({ filters: { filterByName: { name: '' } } });
  const [filter, setfilter] = useState([]);

  function searchPlanet({ target: { value } }) { // searchPlanet(e) { const valor = e.target.value }
    setsearch({
      ...search,
      filters: { filterByName: { name: value } },
    });
  }

  useEffect(() => {
    const getAPI = async () => {
      try {
        const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
        const { results } = await response.json(); // const objeto = await results.results;
        setdata(results);
      } catch (error) {
        console.log(error);
      }
    };
    getAPI();
  }, []); // transformei em componentdidmount()

  useEffect(() => {
    const filterResult = data.filter((planet) => (
      planet.name.toLowerCase().includes(search.filters.filterByName.name.toLowerCase())
    ));
    setfilter(filterResult);
  }, [data, search]); // transformei em componentdidupdate()

  const context = { data, setdata, search, searchPlanet, filter };
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
