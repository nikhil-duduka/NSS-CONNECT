const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const Registration = require('../models/Registration');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { auth, restrictToDeveloper } = require('../middleware/auth');

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id, role: user.role }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new event (developer only)
router.post('/events', auth, restrictToDeveloper, async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all events (public)
router.get('/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Register for an event (public)
router.post('/register', async (req, res) => {
  try {
    const registration = new Registration(req.body);
    await registration.save();
    res.status(201).json(registration);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get registrations for an event (developer only)
router.get('/registrations/:eventId', auth, restrictToDeveloper, async (req, res) => {
  try {
    const registrations = await Registration.find({ eventId: req.params.eventId });
    res.json(registrations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;