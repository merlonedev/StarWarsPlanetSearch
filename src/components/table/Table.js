import React from 'react';
import Body from './Body';
import Header from './Header';
import './Table.css';

export default function Table() {
  return (
    <section>
      <table className="table-container">
        <Header />
        <Body />
      </table>
    </section>
  );
}
