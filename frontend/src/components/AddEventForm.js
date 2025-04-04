import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material';
import axios from 'axios';

const AddEventForm = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    location: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/events', formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Event added successfully!');
      setFormData({ name: '', date: '', location: '', description: '' });
      onClose();
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Event</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          name="name"
          label="Event Name"
          fullWidth
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="date"
          label="Date (YYYY-MM-DD)"
          fullWidth
          value={formData.date}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="location"
          label="Location"
          fullWidth
          value={formData.location}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="description"
          label="Description"
          fullWidth
          multiline
          rows={4}
          value={formData.description}
          onChange={handleChange}
        />
        <Button onClick={handleSubmit} variant="contained" style={{ marginTop: '20px' }}>
          Add Event
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AddEventForm;