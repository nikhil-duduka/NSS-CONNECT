import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);
      localStorage.setItem('token', response.data.token);
      navigate('/admin');
    } catch (err) {
      setError(err.response?.data.error || 'Login failed');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #121212 0%, #1e1e1e 100%)',
        padding: '20px',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: '40px',
          maxWidth: '400px',
          width: '100%',
          textAlign: 'center',
          borderRadius: '15px',
          backgroundColor: '#1e1e1e',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#ffffff',
            marginBottom: '20px',
          }}
        >
          Welcome Back!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#bdbdbd',
            marginBottom: '30px',
          }}
        >
          Please login to your account
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            name="email"
            label="Email"
            fullWidth
            value={formData.email}
            onChange={handleChange}
            sx={{
              '& .MuiInputBase-root': {
                borderRadius: '10px',
                backgroundColor: '#2c2c2c',
                color: '#ffffff',
              },
              '& .MuiInputLabel-root': {
                color: '#bdbdbd',
              },
              '& .MuiInputBase-input': {
                color: '#ffffff',
              },
            }}
          />
          <TextField
            margin="normal"
            name="password"
            label="Password"
            type="password"
            fullWidth
            value={formData.password}
            onChange={handleChange}
            sx={{
              '& .MuiInputBase-root': {
                borderRadius: '10px',
                backgroundColor: '#2c2c2c',
                color: '#ffffff',
              },
              '& .MuiInputLabel-root': {
                color: '#bdbdbd',
              },
              '& .MuiInputBase-input': {
                color: '#ffffff',
              },
            }}
          />
          {error && (
            <Typography
              color="error"
              sx={{
                marginTop: '10px',
                fontWeight: 'bold',
              }}
            >
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              marginTop: '20px',
              padding: '10px 0',
              fontSize: '16px',
              fontWeight: 'bold',
              backgroundColor: '#424242',
              borderRadius: '10px',
              color: '#ffffff',
              '&:hover': { backgroundColor: '#616161' },
            }}
          >
            Login
          </Button>
        </form>
        <Typography
          variant="body2"
          sx={{
            marginTop: '20px',
            color: '#bdbdbd',
          }}
        >
          Don't have an account?{' '}
          <span
            style={{
              color: '#ffffff',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/register')}
          >
            Sign up
          </span>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;