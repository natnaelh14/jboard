require('dotenv').config()
const mongoose = require('mongoose');
const db = require('../config/connection');
const User = require('../models/user');
const Job = require('../models/job');

const userData = require('./userData.json');
const jobData = require('./companyData.json');

db.once('open', async () => {
    await User.deleteMany({});
    await Job.deleteMany({});
  
    await User.insertMany(userData);
    await Job.insertMany(jobData);
  
    console.log('seeding successful!');
    process.exit(0);
  });