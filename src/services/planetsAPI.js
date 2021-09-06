import React from 'react';
import { useEffect, useState } from 'react';
import PlanetsContext from '../Contexts/PlanetContext';

function GetPlanetFetchAPI({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name,
    },
  });

  useEffect(() => {
    const getElements = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const results = await fetch(url);
      const dataHolder = await results.json(); // segurando as informações recebidas
      setData(dataHolder.results); // aqui envia as informações para o novo estado.
    };

    getElements();
  }, []);

  const context = {
    name,
    data,
    filters,
    filtered,
    setData,
    setName,
    setFilters,
    setFiltered,
  };

  return (
    <div>
      <PlanetsContext value={ context }>
        { children }
      </PlanetsContext>
    </div>
  );
}
export default GetPlanetFetchAPI;
