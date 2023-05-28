const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('mainPage.html'));
});

app.post('/grades', (req, res) => {
  const { fullName, grade1, grade2, grade3 } = req.body;
  const averageGrade = (parseInt(grade1) + parseInt(grade2) + parseInt(grade3)) / 3;

  const data = `Full Name: ${fullName} Grade 1: ${grade1} Grade 2: ${grade2} Grade 3: ${grade3}\n\n`;

  fs.appendFile('C://Users//hanig//Desktop//grades.txt', data, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      console.log('Grades saved successfully');
      res.sendStatus(200);
    }
  });
});

module.exports = app;
