import { useState } from 'react';
// import Context from '../Context/Context';

function FilterName() {
  const [filter, setFilter] = useState({
    filterByName: {
      name: '',
    },
  });

  return [filter, setFilter];
}

export default FilterName;
