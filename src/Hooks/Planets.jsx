import { useEffect, useState } from 'react';

function Planets() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint)
        .then((response) => response.json());
      setData(results);
      setLoading(false);
    };
    getData();
  }, []);

  return [data, loading];
}

export default Planets;
