import { useState, useEffect } from 'react';

const useData = () => {
  const [data, setData] = useState([]);
  const [infos, setInfos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const FetchPlanets = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const result = await fetch(url).then((response) => response.json());
      console.log(result);
      setData(result.results);
      setInfos(Object.keys(result.results[0]));
      setLoading(false);
    };
    FetchPlanets();
  }, []);
  return [data, infos, loading];
};

export default useData;
