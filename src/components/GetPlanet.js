import { useEffect, useState } from 'react';
import Table from '../components/Table';
import { useProvider } from '../context/Provider';

function GetPlanet() {
  const [data, setData] = useState([]);
  const { filters, setFilters } = useProvider();
}

useEffect(() => {
  fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((response) => response.json())
    .then((json) => setData(json.results));
}, []);

export default GetPlanet;
