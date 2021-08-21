import { useState, useEffect } from 'react';

function useSaveAPI() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const response = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      await fetch(url).then((packJason) => packJason.json())
        .then(({ results }) => setData(results));
    };
    response();
  }, []);

  return ([data]);
}

export default useSaveAPI;
