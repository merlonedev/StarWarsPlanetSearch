import React from 'react';
import Body from './Body';
import Header from './Header';

export default function Table() {
  return (
    <section>
      <table>
        <Header />
        <Body />
      </table>
    </section>
  );
}
