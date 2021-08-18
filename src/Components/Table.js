import React, { useContext } from 'react';
import Context from '../ContextStuff/Context';

export default function Table() {
  const { data: { results }, filters: { filterByName: { name } } } = useContext(Context);

  if (results === undefined) return <span>Loading...</span>;

  const filteredPlanets = results.filter((p) => (
    p.name.toLowerCase().includes(name.toLowerCase())));

  if (filteredPlanets.length === 0) return <span>No planets found in this galaxy</span>;

  const headers = Object.keys(results[0]);
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
        )) }
      </tbody>
    </table>
  );
}
