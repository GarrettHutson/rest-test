const express=require('express');
const mongoose=require('mongoose');
const app=express();
const cors = require('cors');
app.use(express.json());

require('dotenv').config();
const mongoString = process.env.DATABASE_URI

mongoose.connect('mongodb://localhost:27017/fullstack_db',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})



const routes = require('./routes/routes.js');
app.use(cors());
app.use('/api', routes)
app.listen(4000, ()=>{
    console.log("Running on port 4000")
})
