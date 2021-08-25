import React, { useContext } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Context } from '../context/SWProvider';

function Orders() {
  const { filteredData, data } = useContext(Context);
  if (!filteredData) {
    return <h1>Loading..</h1>;
  } if (filteredData.length <= 0) {
    return <h1>Não encontramos nada</h1>;
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
        {filteredData.map((e) => (
          <TableRow key={ e.name }>
            {Object.values(e).map((elm) => <TableCell key={ elm }>{elm}</TableCell>)}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default Orders;
