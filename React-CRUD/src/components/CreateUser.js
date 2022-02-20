import React, { memo, useState } from "react";
import { Button, TextField } from '@material-ui/core';
import { useUsers } from '../reducer';


const CreateUser = () => {

  const { onUserCreate } = useUsers();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const payload = {
      name,
      username,
      email,
    }
    onUserCreate(payload);
  }

  return (
    <form onSubmit={handleSubmit}>

      <TextField
        label="First Name"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        type="submit"
      >
        Create
      </Button>
    </form>
  );
}

export default memo(CreateUser)