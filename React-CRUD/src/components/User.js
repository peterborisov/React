import React, { memo } from 'react';
import { useUsers } from '../reducer';

const User = ({ user }) => {
  const { onUserDelete } = useUsers();
  return (
    <div>
      <h3>
        {JSON.stringify(user)}
      </h3>
      <button onClick={() => onUserDelete(user.id)}>Delete user: {user.name}</button>
    </div>
  )
}

export default memo(User);