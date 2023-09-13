require('dotenv').config();
const mongoose = require('mongoose')
const express= require('express');
const cors = require('cors');
const cookieparser=require('cookie-parser');
const authroute = require('./routes/auth.js');

const app=express(); //backend framework good for single root, support api requests

app.use(cors()) //cross origin platform connect backend to frontend

//for data transmission
app.use(express.json()); //to parse json info from http request to frontend

app.use(cookieparser()) //middleware parse cookies like jwt
app.use('/api/auth',authroute);

const connect=async()=>{
    try{
       await mongoose.connect(process.env.MONGODB);
       console.log('listening on port 4000,connected to database ');
    }
    catch(e){
        console.log('error connecting to database'); 
    }
}
app.listen(process.env.PORT,()=>{
    connect();
    //console.log('error connecting to database');
})

