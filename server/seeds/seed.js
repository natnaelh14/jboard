const mongoose = require('mongoose');
const db = require('../config/connection');
const User = require('../models/user');
const Company = require('../models/company');

const userData = require('./userData.json');
const companyData = require('./companyData.json');

db.once('open', async () => {
    await User.deleteMany({});
    await Company.deleteMany({});
  
    await User.insertMany(userData);
    await Company.insertMany(companyData);
  
    console.log('all done!');
    process.exit(0);
  });