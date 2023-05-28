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

const port=process.env.PORT || 3000

app.listen(port,()=>{
    console.log("server started")
})