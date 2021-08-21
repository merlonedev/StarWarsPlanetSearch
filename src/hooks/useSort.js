import { useContext } from 'react';
import Context from '../ContextStuff/Context';

export default function useSort() {
  const { systems, setSystems, filters: { order } } = useContext(Context);
  const um = 1;
  function compare(a, b) {
    if (a[order.column] < b[order.column]) {
      return -um;
    }
    if (a[order.column] > b[order.column]) {
      return um;
    }
    return 0;
  }

  const sortSystems = () => {
    if (order.sort === 'ASC') {
      setSystems(systems.sort(compare));
    } else {
      setSystems(systems.sort((a, b) => b[order.column] - a[order.column]));
    }
    console.log(systems, 'sortSystems');
  };

  return [sortSystems];
}
