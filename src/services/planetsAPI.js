import { useEffect, useState } from 'react';

function GetPlanetFetchAPI() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getElements = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const results = await fetch(url);
      const dataHolder = await results.json(); // segurando as informações recebidas
      setData(dataHolder.results); // aqui envia as informações para o novo estado.
    };

    getElements();
  }, []);

  return [data];
}

export default GetPlanetFetchAPI;
