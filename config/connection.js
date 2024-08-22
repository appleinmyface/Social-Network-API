const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/socialnetwork', {
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});


module.exports = mongoose.connection;
