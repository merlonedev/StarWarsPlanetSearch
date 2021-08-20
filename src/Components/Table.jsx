import React, { useContext } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Context } from '../context/SWProvider';

function Orders() {
  const { filteredData } = useContext(Context);
  if (!filteredData) {
    return <h1>Loading..</h1>;
  } if (filteredData && filteredData.length === 0) {
    return <h1>Não encontramos nada</h1>;
  }
  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          {
            Object.keys(filteredData[0]).map((e) => <TableCell key={ e }>{e}</TableCell>)
          }
        </TableRow>
      </TableHead>
      <TableBody>
        {filteredData.map((e) => (
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
  );
}

export default Orders;
