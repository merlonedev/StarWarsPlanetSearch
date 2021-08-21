import React from 'react';
import SearchBar from './SearchBar';
import Thead from './Thead';

function Table() {
  return (
    <>
      <SearchBar />
      <table>
        <Thead />
        <tbody>
          <tr>
            <td>
              {}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Table;
