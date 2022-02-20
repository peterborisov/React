

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './reducer';
import { UserList, CreateUser } from './components';
const App = () => {
  return (
    <UserProvider>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<UserList />} />
            <Route path='/create' element={<CreateUser />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  )
}

export default App
