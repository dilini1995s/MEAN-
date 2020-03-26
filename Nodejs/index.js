const express=require('express');
const bodyParser =require('body-parser');
const cors=require('cors');
const {mongoose} =require('./db.js');
var employeeController=require('./controllers/employeeController.js');//request for employee controller
var app=express();

app.use(bodyParser.json());//sent json data to nodejs
app.use(cors({origin:'http://localhost:4200'}));
app.listen(3000,()=> console.log('Server startes at port:3000'));

app.use('/employees',employeeController);  //add route for employeeController