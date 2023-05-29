const mongoose = require('mongoose');
const uri = 'mongodb+srv://Hensim977:06061997H@devops.mlysp3s.mongodb.net/?retryWrites=true&w=majority';

async function connect() {
  try {
    await mongoose.connect(uri);

    if (process.env.NODE_ENV === 'test') {
      console.log('Connected to URI');
    } else {
      console.log('Connected to URI');
    }
  } catch (error) {
    console.error('Error connecting to URI:', error);
  }
}

module.exports = connect;