import React, { useEffect, useState } from 'react';
import MyContext from '../context/context';
import Table from './Table';

const newstate = (array, text) => {
  const indexofsamestring = -1;
  const newarray = array.filter((n) => n.name.indexOf(text) !== indexofsamestring);
  return newarray;
};

export default function MainPage() {
  const [Data, setData] = useState(undefined);
  const [DataOriginal, setDataoriginal] = useState(undefined);
  useEffect(() => {
    const fetchapi = async () => {
      try {
        const fetchApi = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
        const thedata = await fetchApi.json();
        setData(thedata.results);
        setDataoriginal(thedata.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchapi();
  }, []);

  return (
    <MyContext.Provider value={ Data }>
      <div>
        <p>header</p>
        <label htmlFor="filtertext">
          <input
            type="text"
            data-testid="name-filter"
            onChange={ (event) => setData(newstate(DataOriginal, event.target.value)) }
          />
        </label>
        <Table />
        <p>footer</p>
      </div>
    </MyContext.Provider>
  );
}
