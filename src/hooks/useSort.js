import { useContext } from 'react';
import Context from '../ContextStuff/Context';

export default function useSort() {
  const { systems, setSystems, filters: { order } } = useContext(Context);
  const magicUm = -1;
  const um = order.sort === 'ASC' ? 1 : magicUm;
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
      setSystems(
        [...systems.sort(compare).sort((a, b) => a[order.column] - b[order.column])],
      );
    } else {
      setSystems(
        [...systems.sort(compare).sort((a, b) => b[order.column] - a[order.column])],
      );
    }
    console.log(systems, 'sortSystems');
  };

  return [sortSystems];
}
