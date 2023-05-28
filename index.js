const app = require('./server')

const uri ='mongodb+srv://Hensim977:06061997h@devops.mlysp3s.mongodb.net/?retryWrites=true&w=majority'

const port=process.env.PORT || 3000

app.listen(port,()=>{
    console.log("server started")
})