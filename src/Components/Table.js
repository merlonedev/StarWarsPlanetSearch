import React, { useContext, useEffect } from 'react';
import Context from '../ContextStuff/Context';
import useFilterByNumericValues from '../hooks/useFilterByNumericValues';
import useToEraseOption from '../hooks/useToEraseOption';

export default function Table() {
  const { systems,
    filters: { filterByName: { name }, filterByNumericValues } } = useContext(Context);
  const [useNumeric] = useFilterByNumericValues();
  const [optionErase] = useToEraseOption();

  useEffect(useNumeric, [filterByNumericValues]);
  useEffect(optionErase, [filterByNumericValues]);

  if (!systems.length) return <span>Loading...</span>;

  const filteredPlanets = systems
    .filter((p) => p.name.toLowerCase().includes(name.toLowerCase()));

  if (!filteredPlanets.length) {
    return <span>System could not be found in the archives</span>;
  }

  const headers = Object.keys(systems[0]);
  return (
    <table>
      <thead>
        <tr>
          { headers.map((head) => <th key={ head }>{ head }</th>) }
        </tr>
      </thead>
      <tbody>
        { filteredPlanets.map((planet) => (
          <tr key={ planet.name }>
            { headers.map((head, id) => (
              <td key={ id }>{ planet[head] }</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
