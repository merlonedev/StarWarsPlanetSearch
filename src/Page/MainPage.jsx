import React, { useEffect, useState } from 'react';
import ButtonClear from '../components/ButtonClear';
import Buttons from '../components/Buttons';
import SortSelect from '../components/SortSelect';
import MyContext from '../context/context';
import { initialsort } from '../Services/SortService';
import Table from './Table';

const newstate = (array, text) => {
  const indexofsamestring = -1;
  const newarray = array.filter((n) => n.name.indexOf(text) !== indexofsamestring);
  return newarray;
};

export default function MainPage() {
  const [Data, setData] = useState(undefined);
  const [FilterValues, setFilter] = useState(['population', 'maior que', '0']);
  const [DataOriginal, setDataoriginal] = useState(undefined);
  const [filterused, setFilterused] = useState([]);
  useEffect(() => {
    const fetchapi = async () => {
      try {
        const fetchApi = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
        const thedata = await fetchApi.json();
        initialsort(thedata.results);
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
        <label htmlFor="filtertext">
          <input
            type="text"
            data-testid="name-filter"
            onChange={ (event) => setData(newstate(DataOriginal, event.target.value)) }
          />
        </label>
        <Buttons
          setdata={ (e) => setData(e) }
          setfilter={ (e) => setFilter(e) }
          setfilterused={ (e) => setFilterused(e) }
          data={ Data }
          FilterValues={ FilterValues }
          filterused={ filterused }
        />
        <ButtonClear
          setdata={ (e) => setData(e) }
          setfilter={ (e) => setFilter(e) }
          setfilterused={ (e) => setFilterused(e) }
          DataOriginal={ DataOriginal }
        />
        <SortSelect
          setdata={ (e) => setData(e) }
          data={ Data }
        />
        <Table />
      </div>
    </MyContext.Provider>
  );
}
