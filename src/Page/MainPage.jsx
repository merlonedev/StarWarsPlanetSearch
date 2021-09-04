import React, { useEffect, useState } from 'react';
import MyContext from '../context/context';
import FilterService,
{ filteringcolum, filteringoperator } from '../Services/FilterService';
import Table from './Table';

const newstate = (array, text) => {
  const indexofsamestring = -1;
  const newarray = array.filter((n) => n.name.indexOf(text) !== indexofsamestring);
  return newarray;
};

const newFilter = (array, arrayfilter) => {
  const filter = filteringcolum(arrayfilter[0], 'coluna');
  const operator = filteringoperator(arrayfilter[1], 'operador');
  console.log(arrayfilter[2]);
  if (operator === 'maior que') {
    const newarray = array
      .filter((n) => parseInt(n[filter], 10) > parseInt(arrayfilter[2], 10));
    console.log(newarray);
    return newarray;
  }
  if (operator === 'menor que') {
    const newarray = array
      .filter((n) => parseInt(n[filter], 10) < parseInt(arrayfilter[2], 10));
    console.log(newarray);
    return newarray;
  }
  if (operator === 'igual') {
    const newarray = array
      .filter((n) => parseInt(n[filter], 10) === parseInt(arrayfilter[2], 10));
    console.log(newarray);
    return newarray;
  }
};

export default function MainPage() {
  const [Data, setData] = useState(undefined);
  const [FilterValues, setFilter] = useState(['1', '1', '0']);
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
        <select
          name="select"
          data-testid="column-filter"
          onChange={ (e) => setFilter(FilterService(0, e.target.value, FilterValues)) }
        >
          <option value="1" selected>population</option>
          <option value="2">orbital period</option>
          <option value="3">diameter</option>
          <option value="4">rotation period</option>
          <option value="5">surface water</option>
        </select>
        <select
          name="select"
          data-testid="comparison-filter"
          onChange={ (e) => setFilter(FilterService(1, e.target.value, FilterValues)) }
        >
          <option value="1" selected>maior que</option>
          <option value="2">menor que</option>
          <option value="3">igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          onChange={ (e) => setFilter(FilterService(2, e.target.value, FilterValues)) }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => setData(newFilter(DataOriginal, FilterValues)) }
        >
          filtrar!
        </button>
        <Table />
        <p>footer</p>
      </div>
    </MyContext.Provider>
  );
}
