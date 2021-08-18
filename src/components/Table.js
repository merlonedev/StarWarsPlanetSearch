import React from 'react';
import TableBody from './TabbleBody';
import TableHeader from './TabbleHeader';

export default function Table() {
  return (
    <main>
      <table>
        <TableHeader />
        <TableBody />
      </table>
    </main>
  );
}
