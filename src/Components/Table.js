import React, { useContext, useEffect } from 'react';
import Context from '../ContextStuff/Context';
import useFilterByNumericValues from '../hooks/useFilterByNumericValues';
import useSort from '../hooks/useSort';
import useToEraseOption from '../hooks/useToEraseOption';

export default function Table() {
  const { systems,
    filters: { filterByName: { name }, filterByNumericValues, order },
  } = useContext(Context);
  const [useNumeric] = useFilterByNumericValues();
  const [optionErase] = useToEraseOption();
  const [sortSystems] = useSort();

  useEffect(useNumeric, [filterByNumericValues]);
  useEffect(optionErase, [filterByNumericValues]);
  useEffect(sortSystems, [order]);

  if (!systems.length) return <span>Loading...</span>;

  const filteredPlanets = systems
    .filter((p) => p.name.toLowerCase().includes(name.toLowerCase()));

  if (!filteredPlanets.length) {
    return <span>System could not be found in the archives</span>;
  }

  const headers = Object.keys(systems[0]);
  return (
    <table>
      { console.log(filteredPlanets, 'table')}
      <thead>
        <tr>
          { headers.map((head) => <th key={ head }>{ head }</th>) }
        </tr>
      </thead>
      <tbody>
        { filteredPlanets.map((planet) => (
          <tr key={ planet.name }>
            { headers.map((head, id) => {
              if (planet[head] === planet.name) {
                return <td key={ id } data-testid="planet-name">{ planet[head] }</td>;
              }
              return <td key={ id }>{ planet[head] }</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
