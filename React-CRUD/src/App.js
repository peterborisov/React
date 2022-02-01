

import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UserList from './components/UserList'
import UserCreate from './components/UserCreate'

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const usersFromServer = await fetchUsers()
      setUsers(usersFromServer)
    }
    getUsers()
  }, [])

  const fetchUsers = async () => {
    const res = await fetch('http://localhost:5000/users')
    const data = await res.json()

    return data
  }

  const userCreate = async (user) => {
    const res = await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })

    const data = await res.json()

    setUsers([...users, data])
    window.location.href = '/';
  }

  const deleteUser = async (id) => {
    const res = await fetch(`http://localhost:5000/users/${id}`, {
      method: 'DELETE',
    })
    res.status === 200
      ? setUsers(users.filter((user) => user.id !== id))
      : alert('Error Deleting This User')
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<UserList users={users} deleteUser={deleteUser} />} />
          <Route path='/create' element={<UserCreate userCreate={userCreate} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
