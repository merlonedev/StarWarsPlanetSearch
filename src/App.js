import React, { useEffect, useState } from 'react';

function App() {
  const [residents, setResidents] = useState();

  function getResidents() {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then(({ results }) => setResidents(results.residents));
  }

  useEffect(getResidents);

  return (
    <table>
      <tr>
        <th>residents</th>
      </tr>
      <tr>
        {residents.map((resident, i) => (
          <td key={ i }>{resident}</td>
        ))}
      </tr>
    </table>
  );
}

export default App;
