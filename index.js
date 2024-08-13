import express from 'express';
import 'dotenv/config'
const app = express();

const port =  process.env.PORT || 4000

app.get('/',(req,res)=>{
    res.send('<h1> Jai Shree Ram </h1>')
})
app.get('/jokes/:id',(req,res)=>{
    res.send(`<h1> User sent id from search bar : ${req.params.id}`)
})
app.get('/login',(req,res)=>{
    res.send('<h1> please login to coffee and code </h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h3> Ashok youtube channel</h3>')
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
    
})