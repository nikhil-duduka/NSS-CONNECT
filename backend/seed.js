const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

mongoose.connect('mongodb://localhost:27017/nss-connect', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedDeveloper = async () => {
  try {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await User.create({
      email: 'developer@nss.com',
      password: hashedPassword,
      role: 'developer'
    });
    console.log('Developer user created');
    mongoose.connection.close();
  } catch (error) {
    console.error(error);
  }
};

seedDeveloper();