import React, { useState, useEffect } from 'react';

function Table() {
  const [starWars, setStarWars] = useState([]);
  useEffect(() => {
    const getStarWars = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const result = await fetch(endpoint).then((response) => response.json());
      setStarWars(result);
      console.log(starWars);
    };

    getStarWars();
  }, [starWars]);
  return (
    <div>
      <table>
        Tabela

      </table>
    </div>
  );
}
export default Table;
