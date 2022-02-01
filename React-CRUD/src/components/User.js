import React, { memo } from 'react';

const User = ({ user, onDelete }) => {
  return (
    <div>
      <h3>
        {JSON.stringify(user)}
      </h3>
      <button onClick={() => onDelete(user.id)}>Delete user: {user.name}</button>
    </div>
  )
}

export default memo(User);