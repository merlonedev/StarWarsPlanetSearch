import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Sort() {
  const { planets } = useContext(AppContext);
  if (!planets.length) return null;
  return (
    <div className="sort">
      <label htmlFor="column-sort">
        Ordenar por
        <select name="column" id="column-sort" data-testid="column-sort">
          {Object.keys(planets[0]).map((key, i) => (
            <option key={ i }>{key}</option>
          ))}
        </select>
      </label>
      <label htmlFor="input-asc" className="input-label">
        <input type="radio" name="asc" id="input-asc" />
        Ascendente
      </label>
      <label htmlFor="input-dsc" className="input-label">
        <input type="radio" name="dsc" id="input-dsc" />
        Descendente
      </label>
    </div>
  );
}

export default Sort;
