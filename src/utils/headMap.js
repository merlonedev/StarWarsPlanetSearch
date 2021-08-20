import React from 'react';

export default function heads() {
  const head = [
    'Name',
    'Rotation_period',
    'Orbital_period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface_water',
    'Population',
    'Films',
    'Created',
    'Edited',
    'URL',
  ];
  return head.map((ths) => <th key={ ths }>{ ths }</th>);
}
