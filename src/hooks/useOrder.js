import { useContext } from 'react';
import MyContext from '../MyContext';
import useFilters from './useFilters';
// if (order.sort === 'ASC') {
//   const ordenedPlanets = handleFilter().sort((a, b) => {
//     if (Number(a[order.column])) {
//       return a[order.column] - b[order.column];
//     }
//     if (a[order.column] > b[order.column]) {
//       return 1;
//     }
//     if (a[order.column] < b[order.column]) {
//       return number;
//     }
//     return 0;
//   });
//   return ordenedPlanets;
// } if (order.sort === 'DESC') {
//   const ordenedPlanets = handleFilter().sort((a, b) => {
//     if (Number(a[order.column])) {
//       return b[order.column] - a[order.column];
//     }
//     if (a[order.column] > b[order.column]) {
//       return number;
//     }
//     if (a[order.column] < b[order.column]) {
//       return 1;
//     }
//     return 0;
//   });
//   return ordenedPlanets;

//  Função de ordenação de complexidade muito alta
// }
function useOrder() {
  const { state: { order } } = useContext(MyContext);
  const [handleFilter] = useFilters();
  // ideia de função de ordenação tirada da colega de turma renata
  const sortPlanets = () => {
    const { column, sort } = order;
    let x = '';
    let y = '';
    const negative = -1;

    const ordenedPlanets = handleFilter().sort((a, b) => {
      if (sort === 'ASC') {
        x = a[column];
        y = b[column];
      } else {
        x = b[column];
        y = a[column];
      }

      if (Number(x)) {
        return x - y;
      }

      if (x < y) { return negative; }
      if (x > y) { return 1; }
      return 0;
    });

    return ordenedPlanets;
  };

  return { sortPlanets };
}

export default useOrder;
