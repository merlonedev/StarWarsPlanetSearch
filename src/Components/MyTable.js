import React, { useContext } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { Context } from '../Context/Context';

function MyTable() {
  const { data, newData } = useContext(Context);
  if (!newData) return <h1>Loading</h1>;
  if (newData.length <= 0) {
    return <h1>Este planeta não existe</h1>;
  }
  return (
    <Table>
      <TableHead>
        <TableRow>
          {
            Object.keys(data[0]).map((item) => <TableCell key={ item }>{item}</TableCell>)
          }
        </TableRow>
      </TableHead>
      <TableBody>
        {newData.map((item) => (
          <TableRow key={ item.name }>
            {
              Object.values(item)
                .map((element) => <TableCell key={ element }>{element}</TableCell>)
            }
          </TableRow>
        ))}
      </TableBody>
    </Table>

  );
}

export default MyTable;
