import React, { useContext } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { StarWarsContext } from './StarWarsContext';

function Orders() {
  const { planets } = useContext(StarWarsContext);
  return planets ? (
    <Table size="small">
      <TableHead>
        <TableRow>
          {
            Object.keys(planets[0]).map((e) => <TableCell key={ e }>{e}</TableCell>)
          }
        </TableRow>
      </TableHead>
      <TableBody>
        {planets.map((e) => (
          <TableRow key={ e.name }>
            <TableCell>{e.name}</TableCell>
            <TableCell>{e.rotation_period}</TableCell>
            <TableCell>{e.orbital_period}</TableCell>
            <TableCell>{e.diameter}</TableCell>
            <TableCell>{e.climate}</TableCell>
            <TableCell>{e.gravity}</TableCell>
            <TableCell>{e.terrain}</TableCell>
            <TableCell>{e.surface_water}</TableCell>
            <TableCell>{e.population}</TableCell>
            <TableCell>{e.films}</TableCell>
            <TableCell>{e.created}</TableCell>
            <TableCell>{e.edited}</TableCell>
            <TableCell>{e.url}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ) : <h1>Loading</h1>;
}

export default Orders;
