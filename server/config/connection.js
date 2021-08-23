
const mongoose = require('mongoose');
let data_url = process.env.MONGODB_URI || 'mongodb://localhost/jboard'
console.log({data_url})

mongoose.connect(data_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});


mongoose.connection.once('open',()=> console.log('connection established'))
.on('error',(error)=> console.log('establishing connection failed',error))
module.exports = mongoose.connection;