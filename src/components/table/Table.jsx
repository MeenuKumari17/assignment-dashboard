import React, { useState } from 'react';
import "./table.scss";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Users } from '../../dummyData';


const List = () => {
    

   
    
  return (
    <TableContainer className='table'>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell style={{"color": "white", "fontWeight": "700"}}>Customer</TableCell>
            <TableCell style={{"color": "white", "fontWeight": "700"}}>Order No.</TableCell>
            <TableCell style={{"color": "white", "fontWeight": "700"}}>Amount</TableCell>
            <TableCell style={{"color": "white", "fontWeight": "700"}}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Users.map((user) => (
            <TableRow key={user.order}>
              <TableCell className='customer'>
                  <span className={`name ${user.customer}`}>{user.customer}</span>
              </TableCell>
              <TableCell className='order'>
                  <span className= {`number ${user.order}`}>{user.order}</span>
                </TableCell>
              <TableCell className='total'>
                  <span className={`bill ${user.total}`}>{user.total}</span>
              </TableCell>
              <TableCell className='status'>
                  <span className={`color ${user.status}`}>{user.status}</span>
              </TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List;
