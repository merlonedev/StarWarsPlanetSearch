import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

export default function Table() {
  return (
    <main className="Table-component">
      <table>
        <TableHeader />
        <TableBody />
      </table>
    </main>
  );
}
