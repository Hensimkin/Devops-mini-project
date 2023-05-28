const mongoose =require('mongoose');
const app = require('./server')

const uri ='mongodb+srv://Hensim977:06061997H@devops.mlysp3s.mongodb.net/?retryWrites=true&w=majority'


async function connect() {
    try {
      await mongoose.connect(uri);
      
      if (process.env.NODE_ENV === 'test') {
        console.log("Connected to URI"); 
      } else {
        console.error("Connected to URI"); 
      }
    } catch (error) {
      console.error("error");
    }
  }
  
connect();



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
    console.log('Grades saved successfully1');
    res.sendStatus(200);
  } catch (err) {
    console.error('Error saving grades to MongoDB2:', err);
    res.sendStatus(500);
  }
});




const port=process.env.PORT || 3000

app.listen(port,()=>{
    console.log("server started")
})