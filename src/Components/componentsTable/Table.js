import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

function Table() {
  return (
    <table>
      <thead>
        <TableHeader />
      </thead>
      <tbody>
        <TableBody />
      </tbody>
    </table>
  );
}
export default Table;
