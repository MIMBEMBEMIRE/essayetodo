
const express = require("express");
const bodyParser=require("express");
const app=express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){

var today = new Date();

var current = today.getDay();
var day="";

    switch(current){
        case 0:
            day ="sunday";
            break;
            case 1:
                day="Monday";
                break;
                case 2:
                day ="Twesday";
            break;
            case 3:
            day="thurday"
            break;
            case 4:
                day="Friday";
                break;
                case 5:
                    day="surtarday";
                    break;
                    case 7:
                    day="surday";
                    break;
                    default:
    }  
    res.render("list",{listday:day});


                
            });
            

app.listen(3000,function(){
console.log("the server is running in server 300");

});