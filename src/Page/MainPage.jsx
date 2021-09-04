import React, { useEffect, useState } from 'react';
import MyContext from '../context/context';
import Table from './Table';

export default function MainPage() {
  const [Data, setData] = useState(undefined);
  useEffect(() => {
    const fetchEffect = async () => {
      try {
        const fetchApi = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
        const thedata = await fetchApi.json();
        setData(thedata.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEffect();
  }, []);

  return (
    <MyContext.Provider value={ Data }>
      <div>
        <p>header</p>
        <Table />
        <p>footer</p>
      </div>
    </MyContext.Provider>
  );
}
