import React, { memo } from "react";
import { Link } from "react-router-dom";
import User from './User';
import {
  Button,
  Container,
} from '@material-ui/core';
import { useUsers } from "../reducer";


const UserList = () => {
  const { users } = useUsers();
  return (
    <>
      <Container maxWidth="lg">
        <Link to="/create">
          <Button variant="contained" color="primary">
            CREATE
          </Button>
        </Link>
        {users.map((user, index) => (
          <User key={index} user={user} />
        ))}
      </Container>
    </>
  );
}

export default memo(UserList)