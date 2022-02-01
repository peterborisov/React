import React, { memo, useState } from "react";
import { Button, TextField } from '@material-ui/core';


const UserCreate = ({ userCreate }) => {

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
    userCreate(payload)
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

export default memo(UserCreate)