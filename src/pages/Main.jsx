import React, { useEffect, useState } from 'react';
import Table from '../components/Table';

export default function Main() {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const { results } = await request.json();
      setPlanets(results);
    };
    fetchAPI();
  }, []);
  return (<Table planets={ planets } />);
}
