const localHost = 'http://localhost:5000/';

export const fetchUsers = async () => {
  const res = await fetch(localHost + 'users')
  const data = await res.json()

  return data
}

export const createUser = async (user) => {
  const serverResponse = await fetch(localHost + 'users', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  })

  const newUser = await serverResponse.json()

  window.location.href = '/';
  return newUser;
}

export const deleteUser = async (id) => {
  const serverResponse = await fetch(`${localHost}users/${id}`, {
    method: 'DELETE',
  })
  window.location.href = '/';
  return serverResponse.status === 200
    ? serverResponse
    : alert('Error Deleting This User')
}