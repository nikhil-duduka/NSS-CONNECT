import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <AppBar position="static" style={{ backgroundColor: 'black' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          NSS Connect
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/events">Events</Button>
        <Button color="inherit" component={Link} to="/profile">Profile</Button>
        {token ? (
          <>
            <Button color="inherit" component={Link} to="/admin">Admin Dashboard</Button>
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <Button color="inherit" component={Link} to="/login">Login</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;