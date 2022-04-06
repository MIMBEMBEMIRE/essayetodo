const express = require("express");
const app=express();
const bodyParser=require("express");

app.set("view engine", "ejs");


app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){

    var today = new Date();
    var day="";
    var current =today.getDay();
    if(today.current === 6 || today.current==0){
           day ="weekday";

    }
    else{
       day="weeked";
    }
    res.render("essaye",{essaye: day});
    
    

});

app.listen(3000,function(){


console.log("the server is running in server 300");

});