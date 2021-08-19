import React, { useContext } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { PlanetsContext } from '../context/PlanetsContext';

function Orders() {
  const { data, filteredData } = useContext(PlanetsContext);

  return filteredData && data ? (
    <Table size="small">
      <TableHead>
        <TableRow>
          {
            Object.keys(data[0]).map((e) => <TableCell key={ e }>{e}</TableCell>)
          }
        </TableRow>
      </TableHead>
      <TableBody>
        {filteredData.map((e) => (
          <TableRow key={ e.name }>
            {Object.values(e).map((key) => <TableCell key={ key }>{key}</TableCell>)}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ) : <h1>Loading</h1>;
}

export default Orders;
