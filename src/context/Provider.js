import React, { useState, useEffect } from 'react';
import MyContext from './MyContext';

function Provider({ children }) {
  const [plantes, setPlanets] = useState([]);
  const [name, setNameFilter] = useState('');
  const [numericFilter, setFilters] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((data) => data.json());
    };
    getPlanets();
  }, []);
}

