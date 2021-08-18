import { useState, useEffect } from 'react';

function FetchAPI() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const response = async () => {
      const api = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(api).then((result) => result.json());
      results.forEach((item) => {
        delete item.residents;
      });
      setData(results);
    };
    response();
  }, []);

  return ([data]);
}

export default FetchAPI;
