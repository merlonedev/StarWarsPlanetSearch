import React, { useEffect, useState } from 'react';

function Table() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((firstResult) => firstResult.json());
      setData(results);
    };
    getPlanets();
  }, []);

  return (
    <table>
      Olá, apenas testando aqui se renderiza;
    </table>
  );
}

export default Table;
