import React, { useContext } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { Context } from '../Context/Context';
import Input from './Input';

function MyTable() {
  const { data } = useContext(Context);
  if (!data) return <h1>Loading</h1>;
  return (
    <>
      <Input />
      <Table>
        <TableHead>
          <TableRow>
            {
              Object.keys(data[0]).map((i) => <TableCell key={ i }>{i}</TableCell>)
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={ item.name }>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.rotation_period}</TableCell>
              <TableCell>{item.orbital_period}</TableCell>
              <TableCell>{item.diameter}</TableCell>
              <TableCell>{item.climate}</TableCell>
              <TableCell>{item.gravity}</TableCell>
              <TableCell>{item.terrain}</TableCell>
              <TableCell>{item.surface_water}</TableCell>
              <TableCell>{item.population}</TableCell>
              <TableCell>{item.films}</TableCell>
              <TableCell>{item.created}</TableCell>
              <TableCell>{item.edited}</TableCell>
              <TableCell>{item.url}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default MyTable;
