import React, { memo } from "react";
import { Link } from "react-router-dom";
import User from './User';
import {
  Button,
  Container,
  Table,
  TableBody,
} from '@material-ui/core';


const UserList = ({ users, deleteUser }) => {

  return (
    <>
      <Container maxWidth="lg">
        <Link to="/create">
          <Button variant="contained" color="primary">
            CREATE
          </Button>
        </Link>
        <Table aria-label="simple table">
          <TableBody>
            {users.map((user, index) => (
              <User key={index} user={user} onDelete={deleteUser} />
            ))}
          </TableBody>
        </Table>
      </Container>
    </>
  );
}

export default memo(UserList)