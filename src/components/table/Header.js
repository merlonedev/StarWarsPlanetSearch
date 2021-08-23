import React from 'react';
import './Table.css';

export default function Header() {
  return (
    <thead className="table-container-header">
      <tr>
        <th className="table-container-header__item">Name</th>
        <th className="table-container-header__item">Rotation Period</th>
        <th className="table-container-header__item">Orbital Period</th>
        <th className="table-container-header__item">Diameter</th>
        <th className="table-container-header__item">Climate</th>
        <th className="table-container-header__item">Gravity</th>
        <th className="table-container-header__item">Terrain</th>
        <th className="table-container-header__item">Surface Water</th>
        <th className="table-container-header__item">Population</th>
        <th className="table-container-header__item">Films</th>
        <th className="table-container-header__item">Created</th>
        <th className="table-container-header__item">Edited</th>
        <th className="table-container-header__item">Url</th>
      </tr>
    </thead>
  );
}
