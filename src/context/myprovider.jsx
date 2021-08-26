import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import mycontext from './mycontext';

function Provider({ children }) {
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState({ filters: { filterByName: { name: '' } } });
  const [filter, setfilter] = useState([]);
  const [typeplanet, settypeplanet] = useState('population');
  const [comparision, setcomparision] = useState('Maior que');
  const [nuumber, setnuumber] = useState();

  const option1 = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];
  const option2 = ['maior que', 'menor que', 'igual a'];

  function searchPlanet({ target: { value } }) { // searchPlanet(e) { const valor = e.target.value }
    setsearch({
      ...search,
      filters: { filterByName: { name: value } },
    });
  }

  const savePlanet = (e) => {
    const { value } = e.target;
    settypeplanet(value);
  };

  const saveComparision = (e) => {
    const { value } = e.target;
    setcomparision(value);
  };

  const saveNuumber = (e) => {
    const { value } = e.target;
    setnuumber(value);
  };

  const handleClick = () => {
    const filterPlanetsData = data.filter((info) => {
      switch (comparision) {
      case 'maior que': return (info[typeplanet] > parseFloat(nuumber));
      case 'menor que': return (info[typeplanet] < parseFloat(nuumber));
      case 'igual a': return (info[typeplanet] === nuumber);
      default:
        return ('Error');
      }
    });
    setfilter(filterPlanetsData);
  };

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

  const context = { data,
    setdata,
    search,
    searchPlanet,
    filter,
    option1,
    option2,
    savePlanet,
    saveComparision,
    saveNuumber,
    handleClick,
  };
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
