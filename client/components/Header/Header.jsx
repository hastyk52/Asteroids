import React from 'react';
import Login from '../Login/Login';

const Header = ({ user, handleLogin }) => (
  <header style={{ display: 'flex', justifyContent: 'space-between' }}>
    <h1>Maelstrom</h1>
    {user ? (
      <div>
        <span>{'Good luck '}</span>
        <span id="username">{user}</span>
      </div>
    ) : <Login handleLogin={handleLogin} />}

  </header>
);

export default Header;
