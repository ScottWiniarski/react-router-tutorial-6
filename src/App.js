import { Routes, Route, Link , useNavigate } from 'react-router-dom';
import React, {useState} from 'react';

import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Users from './Components/Users';
import Layout from './Components/Layout';
import NoMatch from './Components/NoMatch';
import User from './Components/User';

const App = () => {
  const navigate = useNavigate();

  const [users, setUsers] = React.useState([
    { id: '1', fullName: 'Robin Wieruch' },
    { id: '2', fullName: 'Sarah Finnley' },
  ]);

  const handleRemoveUser = (userId) => {
    setUsers((state) => state.filter((user) => user.id !== userId));

    navigate('/users');
  };

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users users={users} />}>
            <Route 
            path=":userId"
            element={<User onRemoveUser={handleRemoveUser} />}
            />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
