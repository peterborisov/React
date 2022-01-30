import React, { memo } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import User from './User';
import {
  Button,
  Container,
  Table,
  TableBody,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

const UserList = ({ users, onDelete }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="lg">

        <Link to="/create">
          <Button variant="contained" color="primary">
            CREATE
          </Button>
        </Link>

        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            {users.map((user, index) => (
              <User key={index} user={user} onDelete={onDelete} />
            ))}
          </TableBody>
        </Table>
      </Container>
    </div>
  );
}

export default memo(UserList)