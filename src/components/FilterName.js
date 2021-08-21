import React, { useContext } from 'react';
import myContext from '../context/myContext';
// import useData from '../hooks/useData';

function FilterNameInput() {
  const { setName } = useContext(myContext);
  // const { filterByName } = filters;
  // console.log(data.filter((datas) => datas.name.includes(filterByName.name)));

  // useEffect(() => {
  //   const filter = data.filter((datas) => datas.name.includes(filterByName.name));
  //   setFilters(filter);
  //   setFiltered(true);
  // }, [filterByName.name]);

  return (
    <input
      type="text"
      data-testid="name-filter"
      onChange={ ({ target }) => setName(target.value) }
    />
  );
}

export default FilterNameInput;
