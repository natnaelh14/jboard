const db = require('../config/connection');
const { User, Company } = require('../models');

const userData = require('./userData.json');
const companyData = require('./companyData.json');

db.once('open', async () => {
    // clean database
    await User.deleteMany({});
    await Company.deleteMany({});
  
    // bulk create each model
    await User.insertMany(userData);
    await Company.insertMany(companyData);
  
    console.log('all done!');
    process.exit(0);
  });