/* eslint-disable semi */
require('dotenv').config();
const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;

async function connect () {
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
