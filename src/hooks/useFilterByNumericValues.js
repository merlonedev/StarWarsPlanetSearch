// by Rodrigo Merlone

import { useContext } from 'react';
import Context from '../ContextStuff/Context';

export default function useFilterByNumericValues() {
  const { systems, setSystems, filters: { filterByNumericValues } } = useContext(Context);

  const useNumeric = () => {
    const comps = {
      'maior que': (column, value) => Number(column) > Number(value),
      'menor que': (column, value) => Number(column) < Number(value),
      'igual a': (column, value) => Number(column) === Number(value),
    };

    filterByNumericValues.forEach(({ column, comparison, value }) => setSystems(systems
      .filter((system) => comps[comparison](system[column], value))));
  };
  return [useNumeric];
}
