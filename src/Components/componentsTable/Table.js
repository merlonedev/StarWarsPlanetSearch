import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

function Table() {
  return (
    <table>
      <thead>
        <TableHeader />
      </thead>
      <TableBody />
    </table>
  );
}
export default Table;
