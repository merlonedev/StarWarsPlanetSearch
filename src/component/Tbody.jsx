import React, { useContext } from 'react';
import MyContext from '../context/myContext';

const allFilter = (data, filters) => {
  const { filterByName } = filters;
  const planetByName = filterByName !== '' ? data.filter((item) => item.name
    .includes(filterByName)) : data;
  return planetByName;
};

const Tbody = () => {
  const { data, filters } = useContext(MyContext);
  const itensTable = Object.keys(data[0]);
  const show = allFilter(data, filters);
  return (
    <tbody>
      { show.map((list) => (
        <tr key={ list.name }>
          { itensTable
            .map((item) => <td key={ item }>{list[item]}</td>)}
        </tr>
      )) }
    </tbody>
  );
};

export default Tbody;
