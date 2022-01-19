const express=require("express");
const path=require("path");
require("./db/conn");
const res = require("express/lib/response");
const { dirname } = require("path");
const app=express();
const port=process.env.PORT||3000;

const staticpath = path.join(__dirname,"../public");


app.use(express.static(staticpath))
//routing
app.get("/",function(req,res){
    res.sendFile(__dirname+'/index.html');
})
//server
app.listen(3000,function(req,res){
    console.log('server is running at');
})