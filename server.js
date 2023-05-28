const express = require('express');
const mongoose =require('mongoose');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');

//const uri ='mongodb+srv://Hensim977:06061997H@devops.mlysp3s.mongodb.net/?retryWrites=true&w=majority'

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('mainPage.html'));
});


const gradesSchema = new mongoose.Schema({
  fullName: String,
  grade1: Number,
  grade2: Number,
  grade3: Number,
});

// Define the Mongoose model
const Grades = mongoose.model('Grades', gradesSchema);



app.post('/grades', async (req, res) => {
  const { fullName, grade1, grade2, grade3 } = req.body;
  const averageGrade = (parseInt(grade1) + parseInt(grade2) + parseInt(grade3)) / 3;

  // Create a new instance of the Grades model
  const grades = new Grades({
    fullName: fullName,
    grade1: grade1,
    grade2: grade2,
    grade3: grade3,
  });

  try {
    await grades.save();
    console.log('Grades saved successfully');
    res.sendStatus(200);
  } catch (err) {
    console.error('Error saving grades to MongoDB:', err);
    res.sendStatus(500);
  }
});

module.exports = app;
