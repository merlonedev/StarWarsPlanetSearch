import { useState, useEffect } from 'react';

function useData() {
  const [planets, setPlanets] = useState([]);
  const [tableHeadData, setTableHeadData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(API_URL);
      const { results } = await response.json();
      const resultsWithoutResidents = results.map((planet) => {
        delete planet.residents;
        return planet;
      });
      setPlanets(resultsWithoutResidents);
      setTableHeadData(Object.keys(resultsWithoutResidents[0]));
    };
    fetchAPI();
  }, []);
  return [planets, tableHeadData];
}

export default useData;
