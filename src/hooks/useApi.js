/* import { useState, useEffect } from "react"

const useApi = () => {
  const [planets, setPlanets] = useState([]);
  const [carregando, setCarregando] = useState(true);
  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((response) => response.json());
      setPlanets(results);
    };
    getPlanets();
  }, []);
  return [planets, carregando];
};

export default useApi;
 */
