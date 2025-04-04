import React, { useState, useEffect } from 'react';
import { Typography, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import AddEventForm from '../components/AddEventForm';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [events, setEvents] = useState([]);
  const [registrations, setRegistrations] = useState({});
  const [openAddEvent, setOpenAddEvent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const config = { headers: { Authorization: `Bearer ${token}` } };
        const eventsResponse = await axios.get('http://localhost:5000/api/events', config);
        setEvents(eventsResponse.data);

        const regs = {};
        for (const event of eventsResponse.data) {
          const regResponse = await axios.get(`http://localhost:5000/api/registrations/${event._id}`, config);
          regs[event._id] = regResponse.data;
        }
        setRegistrations(regs);
      } catch (error) {
        console.error('Error fetching data:', error);
        if (error.response?.status === 401 || error.response?.status === 403) {
          localStorage.removeItem('token');
          navigate('/login');
        }
      }
    };
    fetchData();
  }, [navigate]);

  return (
    <div className="page-container">
      <h1>Admin Dashboard</h1>
      <Button variant="contained" onClick={() => setOpenAddEvent(true)} style={{ marginBottom: '20px' }}>
        Add New Event
      </Button>

      <Typography variant="h6">Events and Registrations</Typography>
      {events.map(event => (
        <div key={event._id} style={{ marginBottom: '20px' }}>
          <Typography variant="subtitle1">{event.name} ({registrations[event._id]?.length || 0} registered)</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {registrations[event._id]?.map(reg => (
                <TableRow key={reg._id}>
                  <TableCell>{reg.name}</TableCell>
                  <TableCell>{reg.email}</TableCell>
                  <TableCell>{reg.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ))}

      <AddEventForm open={openAddEvent} onClose={() => setOpenAddEvent(false)} />
    </div>
  );
};

export default AdminDashboard;