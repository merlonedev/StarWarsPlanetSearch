import { useState } from 'react';

function Filter() {
  const [filter, setFilter] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  return [filter, setFilter];
}

export default Filter;
