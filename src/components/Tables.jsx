import React, { useContext } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { PlanetContext } from '../Context/PlanetContext';

function Tables() {
  const { data, filtred } = useContext(PlanetContext);
  if (!filtred) return <h1>Loading</h1>;
  if (filtred.length <= 0) {
    return <h1>There is no planet with this name</h1>;
  }
  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          {
            Object.keys(data[0]).map((e) => <TableCell key={ e }>{e}</TableCell>)
          }
        </TableRow>
      </TableHead>
      <TableBody>
        {filtred.map((e) => (
          <TableRow key={ e.name }>
            {Object.values(e).map((elm) => <TableCell key={ elm }>{elm}</TableCell>)}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default Tables;
