const express = require("express");
const app=express();
const bodyParser=require("express");


app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){

    var today = new Date();
    var current =today.getDay();
    if(today.current === 6 || today.current==0){
    res.send("this is a Monday")
    }
    else{
        res.send("this not a weekend");
    }
    
    

});

app.listen(3000,function(){


console.log("the server is running in server 300");

});