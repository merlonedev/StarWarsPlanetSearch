import React from 'react';
import logo from '../img/starwars_project_logo.png';

// prettier-ignore
export default function Header() {
  return (
    <div id="header">
      <img className="logo" src={ logo } alt="Star Wars Tripadvisor Logo" />
    </div>
  );
}
